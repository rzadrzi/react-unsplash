import React from "react";
import "./result.component.css";
import axios from "axios";

export const Result: React.FunctionComponent<any> = ({
  searchWord,
  ACCESS_KEY,
}: any) => {
  const [searchResult, setSearchResult] = React.useState<any>();
  React.useEffect(() => {
    const baseURL = `https://api.unsplash.com/search/photos?query=${searchWord}&client_id=${ACCESS_KEY}`;
    axios
      .get(baseURL)
      .then((response) => setSearchResult(response.data.results))
      .catch((error) => console.error(error.message));
  }, [searchWord]);

  return (
    <div>
      <h2>{searchWord}</h2>
      <div className="container">
        {searchResult?.map((result: any) => {
          return (
            <div className="outter-image" key={result.id}>
              <img
                className="inner-image"
                alt={result.description}
                src={result.urls.small}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
