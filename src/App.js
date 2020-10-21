import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Jumbotron from './Jumbotron';
import List from './List';

class App extends React.Component
{
  render(){//funcion que se va a ejectutar para decicr que funcion va mostrar en html "render"
    return (
      <div className="App">
        <Jumbotron titulo ="Titulo Jumbotron"/>
        <Card title = "This is a title" number={Math.random()}/>
        <List></List>
      </div>
    );
  }
}
export default App;
