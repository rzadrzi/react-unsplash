import React from "react";
import "./App.css";
import { Search } from "./components/search.component";
import { Result } from "./components/result.component";

function App() {
  const [searchWord, setSearchWord] = React.useState<any>("");

  return (
    <div className="App">
      <Search setSearchWord={setSearchWord} />
      <Result searchWord={searchWord} />
    </div>
  );
}

export default App;
