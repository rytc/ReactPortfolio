import GithubIcon from "../../images/github.png"
import LinkedInIcon from "../../images/linkedin.png"

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg shadow pt-4">
            <div className="container">
                <a className="text-white mb-3 mb-md-0 me-md-auto fs-1 text-decoration-none" href="/"> 
                    <span className="gt">&gt;&nbsp;</span>rytc.io
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon toggle-button">☰</span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="/">About Me</a></li>
                        <li className="nav-item"><a className="nav-link" href="/portfolio">Portfolio</a></li> 
                        <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                        <li className="nav-item ">
                            <a className="nav-link" href="https://rytc.io/RyanCapote_Resume.pdf">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://github.com/rytc"><img src={GithubIcon}/></a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/in/ryan-capote-52a83622/"><img src={LinkedInIcon}/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;