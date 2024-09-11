
import React, { useContext, useState } from 'react'
import {valueContext} from '../Context/SearchValue'
import { Link } from 'react-router-dom';


const Nav = () => {
  const stateValue = useContext(valueContext)
//  console.log(stateValue)

  const [num, setnum] = useState(0);
  const menuControl = () => {
    if (num === 1) {
      document.querySelector("#nav-item-con").style.top = "-100%";
      setnum(0);
    } else {
      document.querySelector("#nav-item-con").style.top = "0%";
      setnum(1);
    }
  };

  const categoryValuSet  = ()=>{
    console.log(stateValue)
  }
  
  return (
    <div className="fixed top-0 left-0 w-full bg-rose-600 flex items-center justify-between px-10 py-4">
      <div className="logo">
        {/* <a href="/" key={1} className="font-light tracking-[1vmin]">
          News Trendy
        </a> */}
      </div>
      <div
        onClick={menuControl}
        id="menu-icon"
        className="cursor-pointer div capitalize hidden px-2 p-1 border-solid border-[1px] border-[#bababa] rounded"
      >
        menu
      </div>
      <div
        id="nav-item-con"
        className="nav-con flex items-center justify-center gap-[4vmin]"
      >
        {[
          "home",
          "business",
          "entertainment",
          "general",
          "health",
          "science",
          "sports",
          "technology",
        ].map((e, i) => {
          return (
            <Link
              onClick={categoryValuSet}
              to={e === "home" ? "/" : e}
              key={i}
              className="cursor-pointer capitalize hover:text-black font-extralight"
            >
              {e}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
