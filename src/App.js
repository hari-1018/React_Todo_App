import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from'react';
import Todo from './TODO_APP/Todo';
import NavigationBar from './TODO_APP/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <h1 className='heading'>Todo App</h1>
      <Todo />
      <p className='description'>Version: 1.0.0</p> 
      <p className='description'>Last updated: 26/08/2024</p>

    </div>
  );
}

export default App;
