import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import About from './components/About';
import Project from './components/ProjectList';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App(){
       
  return(
    <div className='App'>
      <Header/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;