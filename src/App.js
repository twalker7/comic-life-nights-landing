
import './App.css';

import Header from '../src/components/Header';
import Content from '../src/components/Content';
import {Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <main className="App-header">
      <Header/>
      </main>
        
      <Content/>
    </div>
  );
}

export default App;
