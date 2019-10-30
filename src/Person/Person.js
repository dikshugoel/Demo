import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="person" >
            <h2>My name is {props.name}. My age is {props.age}.</h2>
            <p>{props.children}</p>
        </div >
    );
}

export default person;