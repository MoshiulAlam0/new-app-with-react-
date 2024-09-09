import React from 'react'

const ChangeBtn = ({text, d_none, func, marginLorR}) => {
  return (
    <button className={`${d_none?"hidden":'block'} ${marginLorR} capitalize px-4 py-[.7px] border-[1px] border-solid border-[#4d2eff] hover:bg-[#4d2eff] rounded-sm`}>{text}</button>
  )
}

export default ChangeBtn
