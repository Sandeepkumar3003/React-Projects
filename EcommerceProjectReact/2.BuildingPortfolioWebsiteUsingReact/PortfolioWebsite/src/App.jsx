import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  const name = "John Doe";
  const profession = "Java Full Stack Developer";
  const projects = [
    {
      title: "Project One",
      description: "A web application built using React and Java",
      link :"#",
    },
    {
      title: "Project Two",
      description: "A eCommerce platform built using React and Java",
      link :"#",
    },

  ]
  
  return(
    <div className='App'>
      {/* Header Section */}
      <header className='header'>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        
      </header>


      {/* About Section */}
      <section id='about' className='about-section'>
        <h2>About Me</h2>
        <p>Hello! I am {name}, a passionate {profession}. I love web Applications that solves real world user problems.</p>
      </section>


      {/* Project Section */}
      <section id='projects' className='projects-section'>
        <h2>Projects</h2>
        <div className='project-list'>
          {projects.map((project, index) => (
            <div key={index} className='project-item'>
              <h3>{project.title}</h3>
              <h3>{project.description}</h3>
              <a href={project.link} target='_blank' rel='noopener norefferrer'>View Project</a>
            </div>
          ))}
        </div>
      
      </section>

      {/* Contact Section */}
      <section id='contact' className='contact-section'>
          <h2>Contact Me</h2>
          <p>If you would like to get in touch, feel free to email me at <a href="mailto:johndoe@example.com">johndoe@example.com</a></p>

      </section>

      {/* Footer Section */}
      <section className='footer'>
          <p>2026. All right Reserved</p>
      </section>
    </div>
  );
}

export default App;