import React from 'react';
import './Person.css';
import Radium from 'radium';


const person = (props) => {
    //adding mediaquery with Radium
    const style = {

        '@media (min-width: 500px)': {
                            width: '450px'
                                }
    };
                // this will overwrite the blassName styling 
    return (
                   
            <div className="Person" style={style} > 
                <p onClick={props.click}>I'm a {props.name} and i'm {props.age} old.</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name}/>
            </div>
        );
}

export default Radium(person)