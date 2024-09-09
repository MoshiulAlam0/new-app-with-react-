import React, { useEffect, useState } from "react";
import NewsItem from "../Components/NewsItem";
import ChangeBtn from "./ChangeBtn";
import PropTypes from "prop-types";

const NewsCon = ({ keyCode, all, country, category, pageSize }) => {
  const [prevBtnDnone, setprevBtnDnone] = useState(true);
  const [nextBtnDnone, setnextBtnDnone] = useState(true);
  const [isCalled, setisCalled] = useState(true);
  const [page, setpage] = useState(1);
  /**store data on the state : */
  const [data, setdata] = useState({
    status: "ok",
    totalResults: 59,
    articles: [
      {
        source: {
          id: null,
          name: "Investor's Business Daily",
        },
        author: "Investor's Business Daily",
        title:
          "Palantir, Dell Will Finally Join The S&P 500. The Stocks Are Jumping. - Investor's Business Daily",
        description: null,
        url: "https://www.investors.com/news/palantir-dell-join-sp-500-ai-stocks-jumping/",
        urlToImage: null,
        publishedAt: "2024-09-07T00:07:00Z",
        content: null,
      },
      {
        source: {
          id: null,
          name: "New York Post",
        },
        author: "Reuters",
        title:
          "Struggling Big Lots preparing bankruptcy filing, will sell stores: report - New York Post ",
        description:
          "Big Lots, a retailer operating around 1,400 stores and employing over 30,000 workers, has been grappling with declining sales over the past few quarters, putting pressure on its balance sheet.",
        url: "https://nypost.com/2024/09/06/business/struggling-big-lots-preparing-bankruptcy-filing-will-sell-stores-report/",
        urlToImage:
          "https://nypost.com/wp-content/uploads/sites/2/2024/09/big-lots-bankruptcy.jpg?quality=75&strip=all&1725647432&w=1024",
        publishedAt: "2024-09-06T23:55:00Z",
        content:
          "Discount home goods retailer Big Lots is preparing to file for bankruptcy as early as this Sunday and plans to sell its chain of stores through a court-supervised process, Bloomberg News reported Fri… [+1448 chars]",
      },
      {
        source: {
          id: "reuters",
          name: "Reuters",
        },
        author: "Chibuike Oguh",
        title:
          "Wall Street stocks fall, big weekly drop as market waits for Fed to move - Reuters",
        description:
          "U.S. stocks fell on Friday, weighed down by a jobs report that showed a continued labor market slowdown but left traders uncertain about how far the Federal Reserve will go in cutting interest rates.",
        url: "https://www.reuters.com/markets/us/futures-drop-investors-brace-payrolls-data-2024-09-06/",
        urlToImage:
          "https://www.reuters.com/resizer/v2/LZMI7LHUJNMQDOJEUKNUTR7EQA.jpg?auth=477e1934d1b787977573ceb42df149c5d25d07dd6b39858029f41daa31ce0d65&height=1005&width=1920&quality=80&smart=true",
        publishedAt: "2024-09-06T22:50:00Z",
        content: null,
      },
      {
        source: {
          id: null,
          name: "Yahoo Entertainment",
        },
        author: "Rick Newman",
        title:
          "How steelworkers are gambling on politics to block — or improve — the Nippon-US Steel deal - Yahoo Finance",
        description:
          "The union members opposed to Nippon's purchase of US Steel have political leverage at the moment. That will change after the election.",
        url: "https://finance.yahoo.com/news/how-steelworkers-are-gambling-on-politics-to-block--or-improve--the-nippon-us-steel-deal-175646876.html",
        urlToImage:
          "https://s.yimg.com/ny/api/res/1.2/QB5bvtMBwyB_LFkmu9oT3A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-09/11ffc410-6c76-11ef-83fa-9faed1828694",
        publishedAt: "2024-09-06T22:25:37Z",
        content:
          "It seems self-defeating. Unionized steelworkers are effectively blocking the purchase of US Steel by Japans Nippon Steel, leaving a shrunken icon of the American heartland with no good options. US St… [+6210 chars]",
      },
    ],
  });
  //   const [data, setdata] = useState({
  //     status: "ok",
  //     totalResults: 59,
  //     articles: [],
  //   });

  /**for api data function " ===>*/
  async function dataLoad() {
    let url = `https://newsapi.org/v2/${all}?country=${country}&category=${category}&apiKey=${keyCode}&page=${page}&pageSize=${pageSize}`;
    // let res = await fetch(url)
    // let data = await res.json()
    // setdata(data);
    // console.log(url)
    if(pageSize === data.articles.length){
        setnextBtnDnone(false)
    }
    if(page > 1){
        setprevBtnDnone(false)
    }
  }
  useEffect(() => {
    if (isCalled) {
      setisCalled(false);
      dataLoad();
    }
  });

  /**
change page function 
*/
  const changeNext = () => {
    setpage(page + 1);
    dataLoad();
  };
  const changePrev = () => {
    setpage(page - 1);
    dataLoad();
  };

  return (
    <div className="w-full mt-[65px] px-[6vmin]">
      <h1 className="text-center py-4 text-[2rem] capitalize font-extralight">
        Top head line about the buisness
      </h1>
      <div className="main flex flex-wrap gap-[2vmin] items-center justify-center">
        {data.status === "ok" ? (
          data.articles.length > 0 ? (
            data.articles.map((e, i) => {
              return (
                <NewsItem
                  id={i}
                  titel={e.title}
                  link={e.url}
                  imgUrl={e.urlToImage}
                  source={e.source.name}
                  author={e.author}
                  date={e.publishedAt}
                />
              );
            })
          ) : (
            <h1>there are no news</h1>
          )
        ) : (
          <h1>No SIgnal</h1>
        )}
      </div>
      <div className="page-change-btn w-[60%] flex items-center justify-between m-auto py-4">
        <ChangeBtn func={changePrev} text={"⇠ prev"} d_none={prevBtnDnone} />
        <ChangeBtn
          func={changeNext}
          text={"next ⇢"}
          d_none={nextBtnDnone}
          marginLorR={"ml-auto"}
        />
      </div>
    </div>
  );
};

NewsCon.propTypes = {
  all: PropTypes.string,
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.string,
};
NewsCon.defaultProps = {
  keyCode: "a7eefe62fac34b09b7684219260fccd2",
  all: "top-headlines",
  country: "us",
  category: "business",
  pageSize: 10,
};
export default NewsCon;
