import { useState } from "react";
/* import {useForm} from 'react-hook-form'; */
import './input.css'




const Input = props => {



console.log(props)
  


    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState("");
    const load = props.load;
    const suggestions= props.suggestions

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
        setShowSuggestions ( false );
        load(e)}
        

        const SuggestionsListComponent = () => {
            return filteredSuggestions.length  ? (
              <ul class="suggestions">
                {filteredSuggestions.map((suggestion, index) => {
                  let className;
                  // Flag the active suggestion with a class
                  if (index === activeSuggestionIndex) {
                    className = "suggestion-active";
                  }
                  return (
                    <ul className={className} key={suggestion} onClick={onClick} >
                      {suggestion}
                    </ul>
                  );
                })}
              </ul>
            ) : (
              <div class="no-suggestions">
                <em>No suggestions, you're on your own!</em>
              </div>
            );
          };
          

   

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