// import logo from './logo.svg';
import './App.css';
import Header from './Header.js';

function App() {
  // const firstName = "Humberto";
  // const lastName = "Asca";
  
  // const h1Style = {
  //   color: 'orange',
  //   textDecoration: 'underline'
  // }
  return (
    <div className="App">
      <Header title="Amazon Cart" name="Humberto Asca" />
    </div>
  );
}

{/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <p>My name is {firstName}</p>
  <p>My lastname is {lastName}</p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header> */}

export default App;
