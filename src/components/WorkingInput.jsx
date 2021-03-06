import React from "react";
import './input.css'

const Input = (props) => {

    const load = props.load

return(
    <div className="container">
        <form onSubmit={load}>
            <input className="form" 
                name="city" 
                autoComplete="off" 
                placeholder="Város"
                type="text"
              />
        </form>
    </div>
)
}

export default Input