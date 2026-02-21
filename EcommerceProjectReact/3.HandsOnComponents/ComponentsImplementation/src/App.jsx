
import './App.css'

import Header from './components/Header';
import About from './components/About';
import Project from './components/ProjectList';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProfildeCard from './components/ProfileCard';

function App(){

  // const hobby1 = ['Reading' ,'Cooking'];
  
  const handleHobbyClick = (hobby) => {
    alert(`You clicked on: ${hobby}`);
  };

  return(
    <div className='container'>
      {/* <Header/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/> */}

      {/* The above is for Portfolio Website */}


      {/* Let's understand props */}

      

      <h1>Hello</h1>
      <ProfildeCard name="Alice" 
                    age={20} 
                    num='2' 
                    isMember={true} 
                    hobbies={["Reading" ,'Cooking']}
                    onHobbyClick = {handleHobbyClick}
                    />
      <ProfildeCard name="John" 
                    age="17" 
                    num={2} 
                    isMember={false} 
                    hobbies={['Treaking' ,'Running']}
                    onHobbyClick = {handleHobbyClick}
                    />
    </div>
  );
}

export default App;