import GithubIcon from "../../images/github.png"
import LinkedInIcon from "../../images/linkedin.png"

const Footer = (props) => {
    return (
        <footer className="container mt-5 border-top">
            <p className="text-secondary">&copy; 2022 Ryan Capote</p>
            <a href="https://github.com/rytc"><img src={GithubIcon}/></a>
            <a href="https://www.linkedin.com/in/ryan-capote-52a83622/"><img src={LinkedInIcon}/></a>
        </footer>
    )
}

export default Footer;