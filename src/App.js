import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs';
import Teachers from './pages/Teachers';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import Programms from './pages/Programms';
import Register from './pages/Register';
import Tafsser from './pages/Tafsser';
import Tajweed from './pages/Tajweed';
import Revision from './pages/Revision';
import Studies from './pages/Studies';
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/blogs/:id' element={<BlogDetails />}></Route>
        <Route path='/programms' element={<Programms />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/teachers' element={<Teachers />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/tafseer' element={<Tafsser />}></Route>
        <Route path='/tajweed' element={<Tajweed />}></Route>
        <Route path='/Revision' element={<Revision />}></Route>
        <Route path='/Islamic-Studies' element={<Studies />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
