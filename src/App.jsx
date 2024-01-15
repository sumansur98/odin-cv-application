import { useState } from 'react'
import './App.css';

function Component1({ inputName, onInputChange }){

  const handleInputChange = (e)=>{
    const val = e.target.value;
    onInputChange(val);
  }

  return (
    <input type="text" value={inputName} onChange={handleInputChange}/>
  )
}

function Component2({inputName}){
  return (
    <>Input is {inputName}</>
  )
}

function App() {

  const [name, setName] = useState('');

  const handleInputChange = (value)=>{
    setName(value);
  }

  return (
    <>
      <Component1 inputName={name} onInputChange={handleInputChange}/>
      <Component2 inputName={name}/>
    </>
  )
}

export default App
