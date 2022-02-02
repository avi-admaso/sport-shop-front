import logo from "./logo.svg";
import "./App.css";
// import ShoesProvider from "./ShoesContext";
import PantsProvider, { PantsContext } from "./PantsContext";
import Pants from "./Components/Pants";
import ShoesProvider from "./ShoesContext";
import Shoes from "./Components/Shoes";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ShoesProvider> 
          <Shoes/>
        </ShoesProvider>
     {/* <PantsProvider>
       <Pants/>
     </PantsProvider> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
