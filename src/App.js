
import './App.css';
import { useState} from 'react';
import Header from '../src/components/Header';
import FeatureContent from './components/FeatureContent';
import Contact from './components/Contact';
import About from './components/About';

function App() {

  const [currentPage, setCurrentPage] = useState('contact'); 

  function changePage(){
    switch (currentPage) {
      case 'home':
        return <FeatureContent/>
        
      case 'contact':
        return <Contact/>
      case 'about':
        return <About/>
      
      default: 
      return
  
    }
  }


  return (
    <div className="App">
      <main className="App-header">
      <Header currentPage = {currentPage} setCurrentPage = {setCurrentPage}/>
      </main>
   <h1> {currentPage} </h1>
      {changePage()}  
        
    </div>
  );
}

export default App;
