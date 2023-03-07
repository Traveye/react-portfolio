import './App.css';
import Navigation from './components/navigation';
import Footer from './components/footer';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>

      <main className='main'>
        <About />
      </main>

      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
