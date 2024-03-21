import { useState } from "react";

function Search({ onChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchTerm(e) {
    setSearchTerm(e.target.value);
    onChange(e.target.value);
  }

  return (
    <>
      <div className="m-4 flex items-center justify-center">
        <label htmlFor="search">Search: </label>
        <input
          value={searchTerm}
          placeholder="Search here..."
          id="search"
          onChange={handleSearchTerm}
          type="text"
          className=" m-4 px-4 border-2 border-slate-300 rounded-xl "
        />
      </div>
    </>
  );
}

export default Search;
