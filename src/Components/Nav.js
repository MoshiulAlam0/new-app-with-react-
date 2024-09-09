import React, { useState } from "react";

const Nav = () => {
  const [num, setnum] = useState(0);
  const menuControl=()=>{
    if(num === 1){
      document.querySelector("#nav-item-con").style.top="-100%";
     setnum(0)

    }else{
      document.querySelector("#nav-item-con").style.top="0%";
      setnum(1)
    }
  }
  return (
    <div className="fixed top-0 left-0 w-full bg-rose-600 flex items-center justify-between px-10 py-4">
      <div className="logo">
        <h1 key={1} className="font-light tracking-[1vmin]">
          News Trendy
        </h1>
      </div>
      <div  onClick={menuControl} id="menu-icon" className="cursor-pointer div capitalize hidden px-2 p-1 border-solid border-[1px] border-[#bababa] rounded">
        menu
      </div>
      <div   id="nav-item-con" className="nav-con flex items-center justify-center gap-[4vmin]">
        {["home", "top", "Catagory", "Contact"].map((e, i) => {
          return (
            <h1 className="cursor-pointer capitalize hover:text-black font-extralight">
              {e}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
