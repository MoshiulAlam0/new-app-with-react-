import React, { useContext, useState } from "react";
import { valueContext } from "../Context/SearchValue";
const Search = () => {
  const stateValue = useContext(valueContext);
  //  console.log(stateValue)

  const [value, setvalue] = useState();
  return (
    <div className="w-[70%] mt-[65px] ml-auto mr-auto bg-red-400 flex items-center justify-center">
      <input
        onChange={(e) => {
          setvalue(e.target.value);
        }}
        value={value}
        type="text"
        className="py-2 px-3 w-full text-black"
        placeholder="search your news.."
      />
      <button
        onClick={() => {
          stateValue[0].setsearchValue(value);
        }}
        className="bg-[#3e62ff] py-2 px-8 capitalize"
      >
        search
      </button>
    </div>
  );
};

export default Search;
