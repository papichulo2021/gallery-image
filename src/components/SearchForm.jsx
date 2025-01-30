import React, { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      onSubmit(inputValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between mx-auto border-b border-gray-300 pb-1 mb-10">
      <input
        id="search-box"
        type="text"
        className="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none"
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="text-gray-600 hover:text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 text-gray-300 duration-200 hover:scale-120"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
      </button>
    </form>
  );
};

export default SearchForm;
