
import './App.css';

import Header from '../src/components/Header';
import Content from '../src/components/Content';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>



        <Header/>
        <Content/>
      </header>
    </div>
  );
}

export default App;
