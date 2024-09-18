import React, { useContext, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const logoRef = useRef(); // ref  for logo

  const [num, setnum] = useState(0); /// for menu show and hide

  const menuControl = () => {
    if (num === 1) {
      document.querySelector("#nav-item-con").style.top = "-100%";
      setnum(0);
    } else {
      document.querySelector("#nav-item-con").style.top = "0%";
      setnum(1);
    }
  };
 
  // console.log(logoRef.current)
  return (
    <div className="fixed top-0 left-0 w-full z-20 bg-rose-600 flex items-center justify-between px-10 py-4">
      <div className="logo">
        <NavLink
          ref={logoRef}
          to="/"
          key={1}
          className="font-light tracking-[1vmin]"
          style={{color: logoRef.current?.classList?.contains('active')?'white':'white'}}
        >
          News Trendy
        </NavLink>
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
            <NavLink
              to={e === "home" ? "/" : e}
              key={i}
              className={`cursor-pointer capitalize hover:text-black font-extralight`}
            >
              {e}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
