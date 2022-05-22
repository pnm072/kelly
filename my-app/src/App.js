import './App.css';
import Aboutpage from './Pages/Aboutpage';
import Homepage from './Pages/Homepage';
import Resumepage from './Pages/Resumepage';
import Servicespage from './Pages/Servicespage';
import Portfoliopage from './Pages/Portfoliopage';
import Contactpage from './Pages/Contactpage';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
   <>
   <Routes>
     <Route path='/' element={<Homepage/>}/>  
     <Route path='/about' element={<Aboutpage/>}/> 
     <Route path='/resume' element={<Resumepage/>}/> 
     <Route path='/services' element={<Servicespage/>}/> 
     <Route path='/portfolio' element={<Portfoliopage/>}/> 
     <Route path='/contact' element={<Contactpage/>}/> 
   </Routes>
    
   </>
  );
}

export default App;
