import React from "react";
import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

const Autocomplete = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [cache] = useState({});
  const [error, setError] = useState(false);

  const customError =
    "For this feature to work please install CORS extension to chrome and then refresh the page.";
  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchResults();
    }, 300);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const fetchResults = async () => {
    if (cache[searchText]) {
      setSearchResults(cache[searchText]);
    } else {
      try {
        const data = await fetch(
          "https://www.google.com/complete/search?client=firefox&q=" +
            searchText
        );

        const json = await data.json();
        setSearchResults(json[1]);

        cache[searchText] = json[1];
        setError(false);
      } catch (error) {
        setError(true);
      }
    }
  };

  return (
    <div className="flex justify-center w-full">
      {error ? (
        <div className="mt-10 font-bold text-xl"> {customError} </div>
      ) : (
        <div className="mt-20 mx-auto w-1/2">
          <div className="relative">
            <input
              type="text"
              className={`border p-4 w-full rounded-full text-lg outline-none ${
                searchResults.length > 0 && "border-b-2"
              }`}
              placeholder="Enter text here"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onFocus={() => setIsResultVisible(true)}
              onBlur={() => setIsResultVisible(false)}
            ></input>
            {searchResults.length > 0 && (
              <span
                className="absolute right-7 top-5 cursor-pointer"
                onClick={() => setSearchText("")}
              >
                <RxCross2 size={20} />
              </span>
            )}
          </div>
          {searchResults.length > 0 && isResultVisible && (
            <div className="px-4">
              <ul
                className={`p-2 ${
                  searchResults.length > 0 && "border border-t-0"
                }`}
              >
                {searchResults.map((result) => (
                  <li
                    key={result}
                    className="hover:bg-gray-200 cursor-pointer p-2"
                  >
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
