import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="person" >
            <h2 onClick={props.click}>My name is {props.name}. My age is {props.age}.</h2>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div >
    );
}

export default person;