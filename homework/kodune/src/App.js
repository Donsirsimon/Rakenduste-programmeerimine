import React from 'react';
import Enter from './components/Enter';
import Greetings from "./components/Greetings";
import './App.css';
import Item from "./components/Item";



function App() {
  return (
    <div className="App">
      <Enter/>
      <Item 
        name='Tomato' 
        description='The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as a tomato plant.' 
        price={3.50}/>
      <Item 
        name='Cucumber' 
        description='Cucumbers are a type of edible plant that belongs to the gourd family.' 
        price={4.25}/>
      <Greetings name= {"Ken"}/>
    </div>
  );
}

export default App;

// Näide propsi kasutusest: Component Items tomato ja cucumber 
// koos alamcompoponentiga ItemDescription
//