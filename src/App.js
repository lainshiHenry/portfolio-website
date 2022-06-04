import NavBar from "./components/navbar";
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import './App.css';
import SocialBottomBar from "./components/SocialBottomBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      {/*<SocialBottomBar />*/}
    </div>
  );
}

export default App;
