import React from "react";
import "./result.component.css";

export const Result: React.FunctionComponent<any> = ({ searchResult }: any) => {
  return (
    <div>
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
