import React, { useState } from "react";
import "./App.css"
import Nav from "./Components/Nav";
import NewsCon from "./Components/NewsCon";
import Search from "./Components/Search";
import { valueContext } from "./Context/SearchValue";
import { Route, Routes } from "react-router-dom";

const App = () => {
  let key = "d7fe1b124a9344b9831ca2e1ee451a42"; // key 1
  // let key = "a7eefe62fac34b09b7684219260fccd2";  // key 2

  const [searchValue, setsearchValue] = useState();
  const [searchDepandency, setsearchDepandency] = useState();


  return (
    <valueContext.Provider value={{ searchValue, setsearchValue, searchDepandency, setsearchDepandency }}>
      <div>
        <Nav />
        <Search />
        <Routes>
          <Route
            path="/"
            element={<NewsCon keyCode={key} category={"politics"} />}
          />
          <Route
            path="/business"
            element={<NewsCon keyCode={key} category={"business"} />}
          />
          <Route
            path="/entertainment"
            element={<NewsCon keyCode={key} category={"entertainment"} />}
          />
          <Route
            path="/general"
            element={<NewsCon keyCode={key} category={"general"} />}
          />
          <Route
            path="/health"
            element={<NewsCon keyCode={key} category={"health"} />}
          />
          <Route
            path="/science"
            element={<NewsCon keyCode={key} category={"science"} />}
          />
          <Route
            path="/sports"
            element={<NewsCon keyCode={key} category={"sports"} />}
          />
          <Route
            path="/technology"
            element={<NewsCon keyCode={key} category={"technology"} />}
          />
          {/* <Route
            path="/search"
            element={
              <NewsCon
                keyCode={key}
                category={"everything"}
              />
            }
          /> */}
        </Routes>
      </div>
    </valueContext.Provider>
  );
};

export default App;
