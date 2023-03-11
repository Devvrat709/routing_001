import './App.css';
import {
  Routes, Route
} from 'react-router-dom'
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About';
import Project from './Components/Project';
import Service from './Components/Service';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/project' element={<Project />} />
          <Route exact path='/service' element={<Service />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>

    </div>
  );
}

export default App;
