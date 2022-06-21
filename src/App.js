
import './App.css';
import { useState } from 'react';
import Header from '../src/components/Header';
import FeatureContent from './components/FeatureContent';
import Contact from './components/Contact';


function App() {

  const [currentPage, setCurrentPage] = useState('home'); 

  function changePage(){
    switch (currentPage) {
      case 'home':
        return <FeatureContent/>
        break;

      case 'contact':
        return <Contact/>
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
