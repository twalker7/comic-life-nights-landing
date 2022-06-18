
import './App.css';
import { useState } from 'react';
import Header from '../src/components/Header';
import FeatureContent from './components/FeatureContent';
import {Container, Row, Col} from 'react-bootstrap';

function App() {

  const [currentPage, setCurrentPage] = useState('home'); 

  function changePage(){
    switch (currentPage) {
      case 'home':
        return <FeatureContent/>
        break;
    
      default:
        break;
    }
  }


  return (
    <div className="App">
      <main className="App-header">
      <Header/>
      </main>
        
      {changePage()}
    </div>
  );
}

export default App;
