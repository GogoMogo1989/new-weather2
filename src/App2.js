import React from 'react';
import Search from './components/search';
import Cities from './cities/cities'
/* import useFetch from './useFetch' */

const b = Cities.map(futya)

function futya(c){
 return c
}

console.log(b)

function App2(){

    let PropLang = [
        "cica",
        "macska",
        "kutya",
        "egér",
        "tehén"
    ]
  


    return(
        <div className="container">
            <Search lang={PropLang}/>
        </div>
    )
}

export default App2;