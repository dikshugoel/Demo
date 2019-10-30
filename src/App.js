import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Dikshant', age: 28 },
      { name: 'Shubham', age: 25 },
      { name: 'Shivam', age: 23 }
    ]
  };
  switchNameHandler = () => {
    //console.log('clicked !!!');
    this.setState({
      persons: [
        { name: 'Dikshant', age: 27 },
        { name: 'Shubham', age: 25 },
        { name: 'Shivam', age: 23 }
      ]
    })
  }

  namechangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Dikshnt', age: 27 },
        { name: 'Shubham', age: 26 },
        { name: event.target.value, age: 25 },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Welcome to React</h2>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person change={this.namechangeHandler} name={this.state.persons[2].name} age={this.state.persons[2].age}>Chota Bhai</Person>
      </div >
    );
  }
}

export default App;
