import logo from './logo.svg';
import './App.css';
import Main from './component/Main/Main';
import Searched from './component/Searched/Searched';

function App() {
  return (
    <div className="App">
    {/* //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
        // <Main /> */}
        <Searched />
    {/* //   </header> */}
  </div>
  );
}

export default App;
