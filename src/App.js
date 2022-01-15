import "./rytc.css"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import Home from "./components/Home"
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import projects from "./projects"


function App() {
  return (
    <>
    <Header />
    <main className="container mt-4">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/portfolio" element={<Portfolio projects={projects}/>} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
    <Footer />
    </>
  );
}

export default App;
