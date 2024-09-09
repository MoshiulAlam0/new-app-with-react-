import React from 'react'
import NewsItem from "../Components/NewsItem"
import ChangeBtn from './ChangeBtn'
import PropTypes from 'prop-types'

const NewsCon = ({keyCode}) => {
    // let url = https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a7eefe62fac34b09b7684219260fccd2
    console.log(keyCode)
  return (
    <div className='w-full mt-[65px] px-[6vmin]'>
        <h1 className='text-center py-4 text-[2rem] capitalize font-extralight'>Top head line about the buisness</h1>
        <div className="main flex flex-wrap gap-[2vmin] items-center justify-center">
            <NewsItem titel={'first titels'}/>
            <NewsItem titel={'first titels'}/>
            <NewsItem titel={'first titels'}/>
            <NewsItem titel={'first titels'}/>
            <NewsItem titel={'first titels'}/>
            <NewsItem titel={'first titels'}/>
        </div>
        <div className="page-change-btn w-[60%] flex items-center justify-between m-auto py-4">
            <ChangeBtn text={'⇠ prev'} d_none={false}/>
            <ChangeBtn text={'next ⇢'} d_none={false} marginLorR={'ml-auto'}/>
        </div>
    </div>
  )
}

NewsCon.propTypes = {
    
};
NewsCon.defaultProps = {
    keyCode: "a7eefe62fac34b09b7684219260fccd2"
  };
export default NewsCon
