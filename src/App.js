import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

const app = props => {
  const [personsState, setpersonsState] = useState({
    persons: [
      { name: 'Dikshant', age: 28 },
      { name: 'Shubham', age: 25 },
      { name: 'Shivam', age: 23 }
    ]
  })
  //console.log(personsState);

  const switchNameHandler = () => {
    //console.log('clicked !!!');
    setpersonsState({
      persons: [
        { name: 'Dikshant', age: 27 },
        { name: 'Shubham', age: 25 },
        { name: 'Shivam', age: 23 }
      ]
    })
  }

  return (
    <div className="App">
      <h2>Welcome to React</h2>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>Chota Bhai</Person>
    </div >
  );
}

export default app;
