import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  const name = "John Doe";
  const profession = "Java Full Stack Dveloper";
  const projects = [
    {
      title: "Project One",
      description: "A web application built using React and Java",
      link = "#",
    },
    {
      title: "Project Two",
      description: "A eCommerce platform built using React and Java",
      link = "#",
    }

  ]
  
  return(
    <div className='App'>
      <header className='header'>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        
      </header>
    </div>
  );
}