import React from "react";
import "./App.css";
import { Search } from "./components/search.component";
import { Result } from "./components/result.component";
// require("dotenv").config();
import * as dotenv from "dotenv";
// dotenv.config();

const ACCESS_KEY =
  "fd2dff70f99d4388cbea64304a342855ec927993650fc5f0462356ae281a1e1f";

function App() {
  const [searchWord, setSearchWord] = React.useState<any>("");
  console.log(process.env.ACCESS_KEY);

  return (
    <div className="App">
      <Search setSearchWord={setSearchWord} />
      <Result searchWord={searchWord} ACCESS_KEY={ACCESS_KEY} />
    </div>
  );
}

export default App;
