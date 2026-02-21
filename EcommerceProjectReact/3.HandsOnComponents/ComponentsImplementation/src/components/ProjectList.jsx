
function Project(){

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
    );
}

export default Project;