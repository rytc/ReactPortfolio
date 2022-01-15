import ProjectCard from "./ProjectCard";



const Portfolio = (props) => {
    const {projects} = props;
    return (
        <div className="row">
        {projects.map(project => <ProjectCard project={project}/>)}
        </div>
    )
}

export default Portfolio;