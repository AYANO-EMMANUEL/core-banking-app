import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="w-screen  flex p-3 h-screen min-h-[600px] overflow-hidden">
      <div className="relative hidden md:flex md:w-1/3 h-full  bg-gray-200 rounded-xl overflow-hidden">
        <h1 className="font-bold text-lg absolute top-5 left-6">core.</h1>
        <img src="/assets/mockup.png" alt="" className="absolute bottom-0 w-[125%] max-w-[500px] left-10"/>
      </div>
      <div className="w-full md:w-2/3 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-5">core.</h1>
        <form className="space-y-4 w-4/5 max-w-[400px]">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm pr-10 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
            {/* Show/Hide Password Icon (inside input box) */}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute h-max inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
            >
              {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
            </button>
          </div>
          <div className="relative">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm pr-10 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
            {/* Show/Hide Password Icon (inside input box) */}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute h-max inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
            >
              {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
            </button>
          </div>

          {errors && (
            <div className="text-red-600 text-sm">
              {errors}
            </div>
          )}

          <button
            type="submit"
            className="mt-6 w-full bg-black text-white p-3 rounded-md hover:bg-neutral-900 transition duration-200"
          >
            Sign Up
          </button>
          <div>Already have an account? <Link className="text-green-600 font-bold" to={'/login'}>Log in.</Link></div>
        </form>
      </div>
    </div>
  )
}

export default Signup