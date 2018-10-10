import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
        {id:'id1', name: 'Max', age: "22"},
        {id:'id2', name: 'Manu', age: "25"},
        {id:'id3', name: 'Stef', age: "18"}
    ],
    displayCards: false
  }

  deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons.slice(); //copy the array element by element not just the reference or you can use the spread operator
      const persons = [...this.state.persons]; //copy the array element by element not just the reference NEW SYNTAX
      persons.splice(personIndex,1);
      this.setState({persons: persons})

  }
  
  nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(pers => {
          return pers.id === id;
      }); //find the person we are looking for in the state persons array receiving the event and the id from the list
      //it will contain the position in the state persons array
      
      const person = { ...this.state.persons[personIndex]}; //this is making a rreal copy of the emement without manipulating the state
      person.name = event.target.value; //transfers the new name

      const persons = [...this.state.persons];
      persons[personIndex] = person;


      //now we can finally set the state with the new copy of the array 
      this.setState({persons: persons});
    }

  showHideHandler = ()  => {
    const doesShow = this.state.displayCards;
    this.setState({displayCards: !doesShow});
  }


  render() {
    //second method of styling in React and having the style scoped only for this component
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'       
    };

    //this is a cleaner mode to keep the template cleaner
    let persons = null;

    if (this.state.displayCards) {
        persons = (
          <div>
            {this.state.persons.map((person,index) => {
                  return <Person key={person.id}id='id' 
                        click={() => this.deletePersonHandler(index)}
                        name={person.name} 
                        age={person.age} 
                        changed={(event)=> this.nameChangedHandler(event, person.id)}/>
            })}
            
          </div>
        );

        style.backgroundColor="red";
        style[':hover'] = {
                     backgroundColor: 'salmon',
                     color:'black'
        }
  }

  // let classes = ['red','bold'].join(' '); // this will turn in to a single string valable css

  //to make a class dynamic we can proceed like follows:
  const classes = [];
  if (this.state.persons.length <= 2) {
    classes.push('red'); 
  }

  if (this.state.persons.length <= 1) {
    classes.push('bold'); 
  }
    return (

    
        <div className="App">
            <h1>React Lists components <br></br> and dynamic Styles with JS and Radium </h1>  
            {/* join will turn the array intro a string to be used as a class           */}
            <p className={classes.join(' ')}>This is really working ! </p>
            <button style={style} onClick={this.showHideHandler}>Show or Hide</button>
            {persons}
        </div>

    );

    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'I\'m a React App'));

  }
}

export default App;
//we use the higher order component -> Radium to add the capability of the inline styling with JavaScript

