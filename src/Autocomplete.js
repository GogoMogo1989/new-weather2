import { useState } from "react";

const AutoComplete = ({ suggestions }) => {


    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState("");

    const onChange = (e) => {
        const userInput = e.target.value;

        const unLinked = suggestions.filter(
          (suggestion) =>
            suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
    
        setInput(e.target.value);
        setFilteredSuggestions(unLinked);
        setActiveSuggestionIndex(0);
        setShowSuggestions(true);
      };

      const onClick = ( e ) => { 
        setFilteredSuggestions ([]); 
        setInput ( e.target.innerText ); 
        setActiveSuggestionIndex ( 0 ); 
        setShowSuggestions ( false ); };  

        const SuggestionsListComponent = () => {
            return filteredSuggestions.length ? (
              <ul class="suggestions">
                {filteredSuggestions.map((suggestion, index) => {
                  let className;
                  // Flag the active suggestion with a class
                  if (index === activeSuggestionIndex) {
                    className = "suggestion-active";
                  }
                  return (
                    <li className={className} key={suggestion} onClick={onClick}>
                      {suggestion}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div class="no-suggestions">
                <em>No suggestions, you're on your own!</em>
              </div>
            );
          };

          return (
            <>
              <input
                type="text"
                onChange={onChange}
                value={input}
              />
              {showSuggestions && input && <SuggestionsListComponent />}
            </>
          );
        };

export default AutoComplete;