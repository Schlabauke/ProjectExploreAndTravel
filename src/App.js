import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss';
import NavBar from './Components/NavTemp';
import Home from './pages/Home'
import Footer from './Components/Footer';
import Destination from './pages/Destination';
import About from './pages/About';
import Partner from './pages/Partner';


function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/about' element={<About />} />
          <Route path='/partner' element={<Partner />} />
          {/* Hier kommen alle Routen zu den to the Seiten hin */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
