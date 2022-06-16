import React from "react";
import "./App.css";
import { Search } from "./components/search.component";
import { Result } from "./components/result.component";

const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

function App() {
  const [searchWord, setSearchWord] = React.useState<any>("");

  return (
    <div className="App">
      <Search setSearchWord={setSearchWord} />
      <Result searchWord={searchWord} ACCESS_KEY={ACCESS_KEY} />
    </div>
  );
}

export default App;
