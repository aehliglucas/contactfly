import React, { Component } from 'react';
import contactList from './components/contactList';
import messageBoard from './components/messageBoard';
import contactInfo from './components/contactInfo';
import './App.css';

// class Header extends Component {
//   render() {
//     return (
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">{this.props.title}</h1>
//       </header>
//     )
//   }
// }


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <contactList title="CLmain" />
        <messageBoard title="MBmain"/>
        <contactInfo title="CImain" />
      </div>
    );
  }
}
