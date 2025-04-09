// import React from 'react'

// class Car extends React.Component {
//   render() {
//     return <h2>Hello BMW</h2>
//   }
// }

// function App() {
//   const x = 5;
//   let text = 'Goodbye';

//   if (x < 10) {
//     text = 'Hello';
//   }

//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//       <p id="demo">{text}</p>
//     </div>

//   );

// }


// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: 'BMW',
//       model: 'X5',
//       color: 'white',
//       year: 2001
//     };
//   }
//   changeColor = () => {
//     this.setState({color: 'red'});
//   }
//   render() {
//     return (
//       <div>
//         <h2>{this.state.model}</h2>
//         <p>
//           It is a {this.state.color}
//           {this.state.model}
//           from {this.state.year}.
//         </p>
//         <button
//           type='button'
//           onClick={this.changeColor}>change Color</button>
//       </div>
//     )
//   }
// }

// function Football() {
//     const shoot = () => {
//       alert("Great Shot!");
//     }
  
//     return (
//       <button onClick={shoot}>Take the shot!</button>
//     );
//   }

  // function Football() {
  //   const shoot = (a) => {
  //     alert(a);
  //   }
  
  //   return (
  //     <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  //   );
  // }

  // function MissedGoal() {
  //   return <h1>MISSED!</h1>;
  // }
  
  // function MadeGoal() {
  //   return <h1>Goal!</h1>;
  // }

  // function Goal(props){
  //   const isGoal = props.isGoal ; 
  //   if (isGoal) {
  //     return <MadeGoal />
  //   }
  //   return <MissedGoal />
  // }

// export default Goal;
