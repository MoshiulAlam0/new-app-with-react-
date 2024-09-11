import React, { useState } from "react";
import Nav from "./Components/Nav";
import NewsCon from "./Components/NewsCon";
import Search from "./Components/Search";
import { valueContext } from "./Context/SearchValue";
import { Route, Routes } from "react-router-dom";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  let key = 'd7fe1b124a9344b9831ca2e1ee451a42'
  // let key = "a7eefe62fac34b09b7684219260fccd2";

  const [searchValue, setsearchValue] = useState("");
  // const [category, setcategory] = useState("business");

  // for routin
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <NewsCon keyCode={key} category={"politics"} />,
  //   },
  //   {
  //     path: "business",
  //     element: <NewsCon keyCode={key} category={"business"} />,
  //   },
  //   {
  //     path: "entertainment",
  //     element: <NewsCon keyCode={key} category={"entertainment"} />,
  //   },
  //   {
  //     path: "general",
  //     element: <NewsCon keyCode={key} category={"general"} />,
  //   },
  //   {
  //     path: "health",
  //     element: <NewsCon keyCode={key} category={"health"} />,
  //   },
  //   {
  //     path: "science",
  //     element: <NewsCon keyCode={key} category={"science"} />,
  //   },
  //   {
  //     path: "sports",
  //     element: <NewsCon keyCode={key} category={"sports"} />,
  //   },
  //   {
  //     path: "technology",
  //     element: <NewsCon keyCode={key} category={"technology"} />,
  //   },
  //   {
  //     path: "search",
  //     element: <NewsCon keyCode={key} category={"technology"} isSearch={searchValue}/>,
  //   },

  // ]);
  

  return (
    <valueContext.Provider
      value={{ searchValue, setsearchValue }}
    >
      <div>
        <Nav />
        <Search />
        <Routes>
          {/* <NewsCon keyCode={key} /> */}
          {/* <RouterProvider router={router} /> */}
          <Route
            path="/"
            element={<NewsCon keyCode={key} category={"politics"}  isfetch={true}/>}
          />
          <Route
            path= "/business"
            element= {<NewsCon keyCode={key} category={"business"}  isfetch={true} />}
          />
          <Route
             path= "/entertainment"
            element= {<NewsCon keyCode={key} category={"entertainment"}  isfetch={true}/>}
          />
          <Route
            path= "/general"
            element= {<NewsCon keyCode={key} category={"general"}  isfetch={true}/>}
          />
          <Route
            path= "/health"
            element= {<NewsCon keyCode={key} category={"health"} isfetch={true}/>}
          />
          <Route
            path= "/science"
            element= {<NewsCon keyCode={key} category={"science"}  isfetch={true}/>}
          />
          <Route
            path= "/sports"
            element= {<NewsCon keyCode={key} category={"sports"}  isfetch={true}/>}
          />
          <Route
            path= "/technology"
            element= {<NewsCon keyCode={key} category={"technology"}  isfetch={true}/>}
          />
          <Route
            path= "/search"
            element={<NewsCon keyCode={key} category={"technology"} searchText={searchValue} isfetch={true}/>}
          />
        </Routes>
      </div>
    </valueContext.Provider>
  );
};

export default App;
