import React from "react";

type SearchBoxProps = {
  search: string;
  setSearch: (value: string) => void;
};

export const SearchBox: React.FC<SearchBoxProps> = ({ search, setSearch }) => {
  return (
    <div style={{ marginBottom: "2px" }}>
      <input
        name="searchBox"
        placeholder="Search"
        value={search || ""}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
