import React from "react";
import Nav from "./Components/Nav";
import NewsCon from "./Components/NewsCon";
import Search from "./Components/Search";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  
  // let key = 'd7fe1b124a9344b9831ca2e1ee451a42'
  let key = 'a7eefe62fac34b09b7684219260fccd2';
  // for routin 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NewsCon keyCode={key} category={'politics'}/>
    },
    {
      path: "business",
      element: <NewsCon keyCode={key} category={'business'}/>,
    },
    {
      path: "entertainment",
      element: <NewsCon keyCode={key} category={'entertainment'}/>,
    },
    {
      path: "general",
      element: <NewsCon keyCode={key} category={'general'}/>,
    },
    {
      path: "health",
      element: <NewsCon keyCode={key} category={'health'}/>,
    },
    {
      path: "science",
      element: <NewsCon keyCode={key} category={'science'}/>,
    },
    {
      path: "sports",
      element: <NewsCon keyCode={key} category={'sports'}/>,
    },
    {
      path: "technology",
      element: <NewsCon keyCode={key} category={'technology'}/>,
    },
  ]);
  
  return (
    <div>
      <Nav />
      <Search />
      {/* <NewsCon keyCode={key} /> */}
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;

