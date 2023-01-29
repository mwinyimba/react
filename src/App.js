import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home';


export default class App extends React.Component{
  render(){
    // lazima tu return function ili kuweza kuziita
    // static files zote 
    // build method from React .component class

    return (
      // <h1>hellow</h1>
      <Home name="Mwinyi" age="7" />
     
    )
  }
}


// export default App;
