
import './App.css';
import { useState} from 'react';
import Header from '../src/components/Header';
import FeatureContent from './components/FeatureContent';
import Contact from './components/Contact';
import About from './components/About';
import Upcoming from './components/Upcoming';
import Footer from './components/Footer';
import Comics from './components/Comics';

function App() {

  const [currentPage, setCurrentPage] = useState('home'); 

  function changePage(){
    switch (currentPage) {
      case 'home':
        return <FeatureContent/>
        
      case 'contact':
        return <Contact/>
      case 'about':
        return <About/>

      case 'upcoming':
        return <Upcoming/>

        case 'comics':
          return <Comics/>
      
      default: 
      return
  
    }
  }


  return (
    <div className="App">
      <main className="App-header">
      <Header currentPage = {currentPage} setCurrentPage = {setCurrentPage}/>
      </main>
      {changePage()}  
        <Footer/>
    </div>
  );
}

export default App;
