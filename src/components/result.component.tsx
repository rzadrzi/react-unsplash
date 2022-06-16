import React from "react";
import "./result.component.css";
// import "./result.component.sass";

import axios from "axios";

const ACCESS_KEY =
  "fd2dff70f99d4388cbea64304a342855ec927993650fc5f0462356ae281a1e1f";

export const Result: React.FunctionComponent<any> = ({ searchWord }: any) => {
  const [searchResult, setSearchResult] = React.useState<any>();
  React.useEffect(() => {
    const baseURL = `https://api.unsplash.com/search/photos?query=${searchWord}&client_id=${ACCESS_KEY}`;
    axios
      .get(baseURL)
      .then((response) => setSearchResult(response.data.results))
      .catch((error) => console.error(error.message));
  }, [searchWord]);

  console.log(searchResult);

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
