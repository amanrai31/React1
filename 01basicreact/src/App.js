import logo from './logo.svg';
import './App.css';

function App() {
  const DOB =31;                                     // Introducing variable/evaluated expression (JSX)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a href='https://www.linkedin.com/in/aman-rai-8a2289202/' target='blank' > 
        <h1 style={{color:"GrayText",  textDecoration: 'underline' }}>Aman {DOB}</h1>
        </a>
      </header>
    </div>
  );
}

export default App;
