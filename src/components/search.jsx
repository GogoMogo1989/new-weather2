import React, { useState } from "react";

const Autocomplete = ({ lang }) => {
  const [searchtext, setSearchtext] = useState("");
  const [suggest, setSuggest] = useState([]);
  const [resfound, setResfound] = useState(true);

  const handleChange = (e) => {
    let searchval = e.target.value;
    let suggestion = [];
    if (searchval.length > 3) {
      suggestion = lang
        .sort()
        .filter((e) => e.includes(searchval));
        setResfound(suggestion.length !== 0 ? true : false);
    }
    setSuggest(suggestion);
    setSearchtext(searchval);
  };

  const suggestedText = (value) => {
    console.log(value);
    setSearchtext(value);
    setSuggest([]);
  };

  const getSuggestions = () => {

    return (
      <ul>
        {suggest.map((item, index) => {
          return (
            <div key={index}>
              <li onClick={() => suggestedText(item)}>{item}</li>
              {index !== suggest.length - 1 && <hr />}
            </div>
          );
        })}
      </ul>
    );
  };
  return (
    <div className="searchcontainer">
      <input
        type="text"
        placeholder="Search.."
        className="search"
        value={searchtext}
        onChange={handleChange}
      />
      {getSuggestions()}
    </div>
  );
};
export default Autocomplete;