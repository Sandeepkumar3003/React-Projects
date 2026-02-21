import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ConditionalRendering from './conditionalRendering.jsx'


function WelcomeMessage(name){
  return <h1>Hello {name}</h1>;
}

function Greeting(isMorning){
  if(isMorning){
    return <h1>Good Morning</h1>
  }
  return <h1>Good Evening</h1>
}


function App() {
  const element = <h1> Hello World! </h1>
  const name = "World";
  const buttonLabel = "Click me!!";
  const imageUrl = "https://placehold.co/60x40";

  const now = new Date;
  const isMorning = now.getTime>12;
  return (
    <>
      {element}
      <p>hi</p>
      <h1>Hello {name}</h1>
      <button >Click me</button>
      <button style={{backgroundColor:"green", color:"white"}}>Click me</button>
      <button style={{backgroundColor:"green", color:"white"}}>{buttonLabel}</button>
      <button onClick={()=> alert('Button Clicked!')}>Alert Me!!</button>
  
      <img src="https://placehold.co/50x30" alt="Dynamic" />
      <img src={imageUrl} alt="Dynamic" />

      <ConditionalRendering></ConditionalRendering>

      {WelcomeMessage("Alice")}
      {WelcomeMessage("Bob")}
      {WelcomeMessage("John")}

      {Greeting(isMorning)}

      {/* This is Single line comment */}

      {/* This is multi line 
      
      comment
      
      
      */}
      
    </>
  );
}

export default App
