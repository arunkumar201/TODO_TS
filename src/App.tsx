import React from 'react';
import './App.css'
import Input from './components/Todo_InputBox';
//React.FC define the type of the 
//App component which acctually
//a functional component
const App:React.FC=()=>{
  return (
    <div className="App">
       <div className="heading">
       <h1>My Todo App Using TypeScript</h1>
       <Input/>
       </div>
    </div>
  )
}

export default App
