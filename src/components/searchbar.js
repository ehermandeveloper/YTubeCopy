import React, { useState } from 'react';
import SearchIcon from '../img/search.png';
import Seo from "./seo";

export default function SearchBar({ getLink }) {

  const [inputValue, setInputValue] = useState('');

  const inputOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const inputValueSend = () => {
    getLink(inputValue);
    setInputValue('');
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") { // Check for "Enter" key
      event.preventDefault();
      inputValueSend();
    }
  };

  return (
    <section className='flex justify-center items-center'>
      <Seo/>
      <div className='relative'>
        <input
          value={inputValue}
          onChange={inputOnChange}
          onKeyDown={handleKeyDown} // Use handleKeyDown here
          className='w-[85vw] xm:w-[90vw] sm:w-[90vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] 2xl:w-[40vw] text-[10px] xs:text-[12px] xm:text-[14px] md:text-[16px] pl-5 pr-2 py-2 md:py-4 rounded-full focus:outline-none'
          type="search"
          placeholder='Please paste the link'
        />
        <button
          onClick={inputValueSend} // Use inputValueSend here
          className='absolute top-0 right-0 z-50 w-[30px] h-[30px] xs:w-[34px] xs:h-[34px] xm:w-[40px] xm:h-[40px] md:w-[56px] md:h-[56px] rounded-full flex justify-center items-center bg-gradient-to-r from-custom-gradient-start to-custom-gradient-end'
        >
          <img className='w-[20px] md:w-[40px]' src={SearchIcon} alt="search btn" />
        </button>
      </div>
    </section>
  );
}
