import './App.css';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';
import { MainBody } from './Components/MainBody';

function App() {
  return (
    <div className='full '>
      <Navbar name='Shanti'/>
      <div className='bodyStyle'>
        <MainBody/>
        
        <Footer/>

      </div>
      
    </div>
  );
}

export default App;
