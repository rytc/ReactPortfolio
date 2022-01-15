
const ProjectCard = (props) => {
    const {project} = props;
    return (
    <div className="col-sm-12 col-lg-6 pt-4">
        <div className="project overflow-hidden">
            <img src={project.image} alt={project.title} className="lg:h-48 md:h-36 object-cover object-center" />
            <h3>{project.title}</h3> 
            <h6>{project.subtitle}</h6>

            <p>{project.description}</p> 

        <ul className="nav justify-content-center">
            {project.links.map(link => {
                return (
                    <li className="nav-item mr-1 proj-link">
                        <a href={link.url}>{link.name}</a>
                    </li>
                )
            })} 
        </ul>
        </div>
    </div>
    );
}

export default ProjectCard;