import ProjectCard from "./ProjectCard";



const Portfolio = (props) => {
    const {projects} = props;
    return (
        <div className="row">
        {projects.map((project, index) => <ProjectCard key={index} project={project}/>)}
        </div>
    )
}

export default Portfolio;