import { useEffect, useState } from "react";

const banks = [
  { name: "Bank A", logo: "https://via.placeholder.com/30" },
  { name: "Bank B", logo: "https://via.placeholder.com/30" },
  { name: "Bank C", logo: "https://via.placeholder.com/30" },
];

export default function BankDropdown({selectedBank, setSelectedBank}) {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('click', () => setIsOpen(false))
  })

  return (
    <div className="relative w-full my-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-2 border rounded-lg bg-white shadow-sm"
      >
        {selectedBank ? (
          <div className="flex items-center space-x-2">
            <img src={selectedBank.logo} alt={selectedBank.name} className="w-6 h-6" />
            <span>{selectedBank.name}</span>
          </div>
        ) : (
          <span>Select a Bank</span>
        )}
        <span>&#9662;</span>
      </button>
      {isOpen && (
        <ul className="absolute mt-1 w-full bg-white border rounded-lg shadow-lg overflow-hidden">
          {banks.map((bank, index) => (
            <li
              key={index}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSelectedBank(bank);
                setIsOpen(false);
              }}
            >
              <img src={bank.logo} alt={bank.name} className="w-6 h-6 mr-2" />
              {bank.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
