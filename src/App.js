import "./rytc.css"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import Home from "./components/Home"
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import projects from "./projects"
import { Component } from "react/cjs/react.production.min";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'home'
    }
    this.onLinkClick = this.onLinkClick.bind(this);
  }

  onLinkClick(event) {
    if(event.target.id == "about") {
      this.setState({mode: 'home'});
    } else if(event.target.id == 'portfolio') {
      this.setState({mode: 'portfolio'});
    } else if(event.target.id == "contact") {
      this.setState({mode: 'contact'});
    }

  }

  render() {
    
    if(this.state.mode == 'portfolio') {
      return (
        <>
          <Header onLinkClick={this.onLinkClick} />
          <main className="container mt-4"><Portfolio projects={projects} /></main>
        </>
      )     
    } else if(this.state.mode == 'contact') {
      return (
          <>
            <Header onLinkClick={this.onLinkClick} />
            <main className="container mt-4"><Contact /></main>
          </>
        )
    } else {
      return (
          <>
            <Header onLinkClick={this.onLinkClick}/>
            <main className="container mt-4"><Home /></main>
          </>
        )
    }

  }
}


export default App;
