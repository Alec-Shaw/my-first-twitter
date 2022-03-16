import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app';


 //class WhoAmI extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//         years: 26
//     }
//     this.newYear = this.newYear.bind(this);
//   }
//   newYear() {
//     console.log(1);
//     this.setState(state => ({
//           years: ++state.years
//     }))
//   }
//     state = {
//       years: 26
//     }

//     newYear = () => {
//       this.setState(state => ({
//         years: ++state.years
//             }))
//     }

//   render() {
//     const {name, surname, link} = this.props;
//     const {years} = this.state;
//     return (
//       <>
//         <button onClick={this.newYear}>++</button>
//         <h1>My name is {name}, surname - {surname}, years = {years}</h1>
//         <a href={link}>My profile</a>
//       </>
//     )
//   }
// }


// const All = () => {
//   return (
//   <>
//   <WhoAmI name="Jhon" surname="Red" link="gooe.com"/>
//   <WhoAmI name="Max" surname="Er" link="gogle.com"/>
//   <WhoAmI name="Mit" surname="Brit" link="ogle.com"/>
//   </>
//   )
// }

ReactDOM.render(
 <App/>,
  document.getElementById('root')
);


