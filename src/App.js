import React from "react";
import Nav from "./Components/Nav";
import NewsCon from "./Components/NewsCon";

const App = () => {
  // let key = 'd7fe1b124a9344b9831ca2e1ee451a42'
  let key = 'a7eefe62fac34b09b7684219260fccd2'
  return (
    <div>
      <Nav />
      <NewsCon keyCode={key} />
    </div>
  );
};

export default App;
