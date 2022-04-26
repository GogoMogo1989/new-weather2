import { useState } from "react";
import './input.css'

const Input = ( { suggestions },props) => {

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
            return filteredSuggestions.length>3 ? (
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

    const load = props.load

    return(
        <div className="container">
            <form onSubmit={load}>
                <input className="form" 
                    name="city" 
                    autoComplete="off" 
                    placeholder="Város"
                    type="text"
                    onChange={onChange}
                    value={input}
                  />
                  {showSuggestions && input && <SuggestionsListComponent />}
            </form>
        </div>
    )
}

export default Input