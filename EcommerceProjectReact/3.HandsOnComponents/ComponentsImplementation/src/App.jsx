
// import './App.css'
import Header from './components/Header';
import About from './components/About';
import Project from './components/ProjectList';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProfildeCard from './components/ProfileCard';

function App(){
       
  return(
    <>
      {/* <Header/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/> */}

      {/* The above is for Portfolio Website */}


      {/* Let's understand props */}

      <h1>Hello</h1>
      <ProfildeCard name="Alice"/>
      <ProfildeCard name="John"/>
    </>
  );
}

export default App;