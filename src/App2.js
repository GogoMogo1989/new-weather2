import React from "react";
import Autocomplete from "./Autocomplete";
import Cities from 'cities.json';

const newCities = Cities.map(kutya)

function kutya(value){
    return value.name
}

const App2 = () => {
  return (
    <div>
      <h1>React Autocomplete Demo</h1>
      <h2>Start typing and experience React autocomplete!</h2>
      <Autocomplete
        suggestions={newCities}
      />
    </div>
  );
};

export default App2;