import React, { useContext, useState } from "react";
import { valueContext } from "../Context/SearchValue";
import { Link } from "react-router-dom";
const Search = () => {
  const stateValue = useContext(valueContext); /// context
  const [value, setvalue] = useState(); // store field value 
  return (
    <div className="w-[70%] mt-[65px] ml-auto mr-auto bg-red-400 flex items-center justify-center">
      <input
        onChange={(e) => {
          setvalue(e.target.value); //set field value 
        }}
        value={value}
        type="text"
        className="py-2 px-3 w-full text-black"
        placeholder="search your news.."
      />
      <Link
      to="search"
        onClick={() => {
          stateValue.setsearchValue(value) // set field value on the context state variable.
        }}
        className="bg-[#3e62ff] py-2 px-8 capitalize"
      >
        search
      </Link>
    </div>
  );
};

export default Search;
