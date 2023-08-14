import { useEffect, useState } from "react";


/* eslint-disable react/prop-types */
function SearchSection({ currentList, updateSharedState }) {
  const [searchString, setSearchString] = useState("");
  const [refData, setRefData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
    setRefData(currentList);
    updateSharedState(filteredData);
  }, [currentList, filteredData]);

  const handlefilterEvent = () => {
    const filteredList = refData.filter((rest) => +rest.info.avgRating > 4);
    setFilteredData(filteredList);
  };

  const handleSearchEvent = () => {
    const searchedRes = refData.filter((rest) =>
      rest.info.name.toLowerCase().includes(searchString.toLowerCase())
    );
    setFilteredData(searchedRes);
  };

  const handleInputEvent = (event) => {
    setSearchString(event.target.value);
  };

  const handleClearfilterEvent = () => {
    setFilteredData(refData);
  };

  
  return (
    <div className="h-16 flex items-center">
      <input
      className="mx-2 my-auto h-8 rounded-sm border border-black "
        id="search-Bar "
        value={searchString}
        onChange={handleInputEvent}
      />
      <button className="mx-2 my-auto h-10 bg-slate-400 px-4 rounded-md shadow-lg " id="search-button" onClick={handleSearchEvent}>
        Search
      </button>
      <button className="mx-2 my-auto h-10  bg-slate-400 px-4 rounded-md shadow-lg" id="filter-button" onClick={handlefilterEvent}>
        Top Rated restaurants
      </button>
      <button className="mx-2 my-auto h-10  bg-slate-400 px-4 rounded-md shadow-lg" id="filter-button" onClick={handleClearfilterEvent}>
        Clear All Filters
      </button>
    </div>
  );
}

export default SearchSection;
