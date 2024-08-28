import React, { useState } from 'react'
import '../App.css';

function HookDemo() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isBoolValue, setIsBoolValue] = useState(false);
  
  const updateName = () => {
    setName("Murali");
  }
  
  const incrementAge = () => {
    setAge(age + 1);
  }

  const updateBoolValue = () => {
    setIsBoolValue(!isBoolValue);
  }


  return (
    <div className='hookdemo'>
      <p>Your Name: {name}</p>
      <button onClick={updateName}>Click Me</button>
      <p>Your Age: {age}</p>
      <button onClick={incrementAge}>Increment</button>
      <p>Eligible for Vote: {isBoolValue ? "Yes" : "No"}</p>
      <button onClick={updateBoolValue}>Eligibility</button>
    </div>
    
  )
}

export default HookDemo