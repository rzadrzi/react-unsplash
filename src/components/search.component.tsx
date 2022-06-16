import React from "react";
import "./search.component.css";

export const Search: React.FunctionComponent<any> = ({
  setSearchWord,
}: any) => {
  const [word, setWord] = React.useState<string>("");
  React.useEffect(() => {
    setSearchWord(word);
  }, [word, setSearchWord]);
  return (
    <div className="search">
      <input
        type="text"
        className="search-bar"
        value={word}
        onChange={(e) => setWord(e.currentTarget.value)}
      />
    </div>
  );
};
