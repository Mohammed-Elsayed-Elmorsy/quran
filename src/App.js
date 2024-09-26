import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs';
import Teachers from './pages/Teachers';
import BlogDetails from './pages/BlogDetails';
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/blogs/:id' element={<BlogDetails />}></Route>
        <Route path='/teachers' element={<Teachers />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
