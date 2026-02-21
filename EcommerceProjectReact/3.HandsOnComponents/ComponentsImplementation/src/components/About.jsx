
function About(){

    const name = "John Doe";
    const profession = "Java Full Stack Developer";

    return(
        <section id='about' className='about-section'>
            <h2>About Me</h2>
            <p>Hello! I am {name}, a passionate {profession}. I love building web Applications that solves real world user problems.</p>
        </section>
    );
}

export default About;