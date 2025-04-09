import React from 'react'
//Component 1
class Vehicle extends React.Component {
  render() {
    return <h2>Hello BMW</h2>
  }
}


//Component 2
function App() {
  const x = 5;
  let text = 'Goodbye';

  if (x < 10) {
    text = 'Hello';
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p id="demo">{text}</p>
    </div>

  );

}


//Component 3
class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: 'BMW',
      model: 'X5',
      color: 'white',
      year: 2001
    };
  }
  changeColor = () => {
    this.setState({ color: 'red' });
  }
  render() {
    return (
      <div>
        <h2>{this.state.model}</h2>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type='button'
          onClick={this.changeColor}>change Color</button>
      </div>
    )
  }
}


//Component 4
function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}

//Component 5
function NewFootball() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}
//Simple Logic 1
function missedGoal() {
  return <h1>MISSED!</h1>;
}

//Simple Logic 2
function madeGoal() {
  return <h1>Goal!</h1>;
}


//Component 6
function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <madeGoal />
  }
  return <missedGoal />
}

//Component 7
function NewCar(props) {
  return <h2>Hi, I am {props.color} a Car!</h2>;
}

//Component 8
function NewGarage() {
  return (
    <>
      <h1>
        who lives in my garage?
      </h1>
      <car />
    </>
  );
}
//simple function 3
function car() {
  return <h2>Hi, I am a Car!</h2>;
}

//simple function 4
function NewestCar(props) {
  return (
    <div>
      <h2>I am a {props.brand}!</h2>
    </div>
  )
}
const myElement = <Car brand='BMW' />;

//Component 9
function Garage(props) {
  const cars = props.cars
  return (
    <div>
      <h1>Garage</h1>
      {cars.length > 0 && <h2>You have {cars.length} cars in your garage.</h2>}
    </div>
  )
}

//simple function 5
function Car(props) {
  return <li> I am {props.brand}</li>
}

//Component 10
function NewestGarage() {
  const cars = [
    { id: 1, brand: 'Ford' },
    { id: 2, brand: 'BMW' },
    { id: 3, brand: 'Ferrari' }
  ];
  return (
    <div>
      <h1>Who lives in My Garage</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </div>
  );
}
// import { useState } from 'react';
function MyForm() {
  const [inputs, setInputs] = React.useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('The name entered is : '+ inputs.userName + ' and age is : ' + inputs.age);
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input type='text' name='userName' value={inputs.userName || ""} onChange={handleChange} />
      </label>
      <label>
        Enter your age:
        <input type='number'
          name='age'
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <input type='submit' />
    </form>
  )
}

export default MyForm;
