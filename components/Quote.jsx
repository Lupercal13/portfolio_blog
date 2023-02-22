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
    <div className="w-full text-center mx-auto my-8  pb-4">
      <div className="w-[80%] mx-auto flex flex-col gap-4 py-8  ">
        {/* <div>
          <FaQuoteLeft size={30}className='fill-gray-500' />
        </div> */}
        <div className=" font-bold text-lg ">
          <p className="text-gray-600 flex gap-4"><FaQuoteLeft className="fill-gray-400" /> {quote} <FaQuoteRight className="fill-gray-400"/> </p>
        </div>
      </div>
      <div className="flex justify-end w-[90%] font-semibold gap-2 items-center">
        <p className="text-gray-500"> - {author}</p>
      <div className="">
        <button onClick={fetchData} className=''>
          <AiOutlineRedo className="hover:scale-105 fill-gray-400" />
        </button>
      </div>
      </div>
    </div>
  );
}

export default Quote;
