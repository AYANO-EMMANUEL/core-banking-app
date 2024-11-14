import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {

  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="w-screen  flex p-3 h-screen min-h-[600px] overflow-hidden">
      <div className="relative hidden md:flex md:w-1/3 h-full  bg-gray-200 rounded-xl overflow-hidden">
        <h1 className="font-bold text-xl absolute top-5 left-6">core.</h1>
        <img src="/assets/mockup.png" alt="" className="absolute bottom-0 w-[85%] max-w-[500px] left-[50%] -translate-x-1/2" />
      </div>
      <div className="w-full md:w-2/3 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-3">core.</h1>
        <p className="text-sm text-gray-400 mb-4">Create your account now</p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-4/5 max-w-[400px]">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              {...register("email",
                {
                  required: 'Email is required',
                  pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Please enter a valid email',
                  },
                }
              )}
              type="email"
              id="email"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              {...register("password",
                {
                  required: "Enter a valid password",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long!",
                  },
                  validate: (value) => {
                    return (
                      [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
                        pattern.test(value)
                      ) || "Password must include at least one lowercase, uppercase, number, and special characters"
                    );
                  },
                }
              )}
              type={showPassword ? 'text' : 'password'}
              id="password"
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
              {...register("confirmPassword", {
                required: 'Confirm your password!',
                validate: (val) => {
                  if (watch('password') != val) {
                    return "Your passwords do no match";
                  }
                },
              })}
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
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

          {(errors.email) ? (
            <div className="text-red-600 text-sm">
              {errors.email?.message}
            </div>
          ) : errors.password ? (
            <div className="text-red-600 text-sm">
              {errors.password?.message}
            </div>
          ) : errors.confirmPassword && (
            <div className="text-red-600 text-sm">
              {errors.confirmPassword?.message}
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