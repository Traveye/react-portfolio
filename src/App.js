import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import About from './components/about';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Resume from './components/resume';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/react-portfolio">
        <header className="App-header">
          <Navigation />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
