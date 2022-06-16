import React from "react";
import "./App.css";
import { Search } from "./components/search.component";
import { Result } from "./components/result.component";
import axios from "axios";

const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

function App() {
  const [searchWord, setSearchWord] = React.useState<any>("");
  const [searchResult, setSearchResult] = React.useState<any>();

  React.useEffect(() => {
    const baseURL = `https://api.unsplash.com/search/photos?query=${searchWord}&client_id=${ACCESS_KEY}`;
    axios
      .get(baseURL)
      .then((response) => setSearchResult(response.data.results))
      .catch((error) => console.error(error.message));
  }, [searchWord]);

  return (
    <div className="App">
      <Search setSearchWord={setSearchWord} />
      <div>
        <h2>{searchWord}</h2>
        {searchWord ? <hr></hr> : ""}
      </div>
      <Result searchResult={searchResult} />
    </div>
  );
}

export default App;
