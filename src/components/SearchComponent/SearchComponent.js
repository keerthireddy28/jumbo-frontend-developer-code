import React, { useState } from "react";
import "./SearchComponent.scss";

const SearchComponent = ({ handleSearch }) => {
  const [query, setQuery] = useState("");
  const triggerSearch = () => {
    handleSearch(query);
  };
  return (
    <div className="serchComp wrapper">
      <div className="serchComp-container">
        <span className="serchComp-icon"></span>
        <input
          type="text"
          className="serchComp-input"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              triggerSearch();
            }
          }}
        />
      </div>
    </div>
  );
};

export default SearchComponent;
