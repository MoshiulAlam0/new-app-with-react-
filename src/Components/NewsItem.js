
import React from 'react'

const NewsItem = ({id, imgUrl, link, titel, date, author, source}) => {
  let img = "https://media.gettyimages.com/id/1311148884/vector/abstract-globe-background.jpg?s=612x612&w=gi&k=20&c=G5uPfn2VTF3aXCr76pn1T7oWE-aHVQ0rAYMl_MK2OvM="
  return (
    <div key={id} id='new-item-con' className=" text-white aspect-[1/.9] bg-[#686868] w-[55vmin] pb-2 rounded-md overflow-hidden">
    <img
      className="w-full aspect-[1/.5] mb-3"
      src={imgUrl ? imgUrl : img}
      alt=""
    />
    <div className="text w-full px-2">
      <p className='text-[.9rem] my-1 text-[#ffc811] capitalize'>source : {source?source:'no record'}</p>
      <h1 className=" capitalize text-[1rem] font-extralight leading-none">
        {titel.length > 70 ? titel.slice(0, 70)+"..." : titel}
      </h1>
      <p className='font-light text-[.8rem] my-1 text-[#d8d8d8]'>by {author?author:'no record'} on {date}</p>
      <a href={link} target="_blank"
        className="capitalize py-1 px-[3vmin] bg-[#4b23fd] text-white ml-auto rounded-md hover:text-[#ff2f85] hover:bg-[#3a0eff]"
      >
        read
      </a>
    </div>
  </div>
  )
}

export default NewsItem;

