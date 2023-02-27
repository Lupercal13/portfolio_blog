import React, { useState, useEffect, use } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { AiOutlineRedo } from "react-icons/ai";

function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const apiUrl = "https://type.fit/api/quotes";
  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      const randomNumber = Math.floor(Math.random() * json.length);
      console.log(json[randomNumber].text);
      setQuote(json[randomNumber].text);
      setAuthor(json[randomNumber].author);
      console.log(json[randomNumber].author);
    } catch (error) {
      console.log("error", TypeError);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-[90%] text-center mx-auto my-8 pb-4 bg-white/20 rounded-lg shadow-md ">
      <div className="w-[80%] lg:w-[50%]  flex flex-col justify-center items-center mx-auto gap-4 py-8  ">
        {/* <div>
          <FaQuoteLeft size={30}className='fill-gray-500' />
        </div> */}
        <div className=" font-bold text-lg lg:text-xl ">
          <p className="text-gray-600 flex gap-4"><FaQuoteLeft className="fill-purple-400" /> {quote} <FaQuoteRight className="fill-purple-400"/> </p>
        </div>
      </div>
      <div className="flex justify-end w-[90%] lg:w-[70%] font-semibold gap-2 items-center">
        <p className="text-gray-500 italic"> - {author}</p>
      <div className="">
        <button onClick={fetchData} className=''>
          <AiOutlineRedo className="hover:scale-105 fill-gray-400 hover:fill-gray-700" />
        </button>
      </div>
      </div>
    </div>
  );
}

export default Quote;
