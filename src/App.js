import { BrowserRouter, HashRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs';
import Teachers from './pages/Teachers';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import Programms from './pages/Programms';
import Tafsser from './pages/Tafsser';
import Tajweed from './pages/Tajweed';
import Revision from './pages/Revision';
import Studies from './pages/Studies';
import { Toaster } from 'react-hot-toast';
import PricingPage from './pages/Pricing';
import { useSelector } from 'react-redux';
import LangOverlay from './components/LangOverlay';
import aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import FreeTrial from './components/FreeTrial';
import TeachersDetails from './pages/TeachersDetails';
import PorgDetails from './pages/PorgDetails';
import { FaWhatsapp } from 'react-icons/fa';
function App() {
  useEffect(() => {
    aos.init({
      duration: 900,
      delay: 100,
    })
  }, [])
  const state = useSelector(state => state.lang.arabic)
  const lang = localStorage.getItem('lang') ? JSON.parse(localStorage.getItem('lang')) : state
  return (
    <div className={`${lang ? 'arabic' : 'en'}`}>
      <HashRouter>
        <Link to={'https://wa.me/201212659525'} target='_blank'
          className=' start-chat bg-primary block rounded-md hover:bg-secondary hover:text-white
      py-3 px-5 text-secondary fixed text-[30px] cursor-pointer z-50 bottom-10 right-10'>
          <FaWhatsapp />
          <span className='start-chat-hover capitalize'>
            {lang ? 'تواصل معنا الان ' : 'start chat now'}
          </span>
        </Link>
        <LangOverlay />
        {/* <FreeTrial /> */}
        <Toaster />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/blogs/:id' element={<BlogDetails />}></Route>
          <Route path='/programms' element={<Programms />}></Route>
          <Route path='/programms/:id' element={<PorgDetails />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/teachers' element={<Teachers />}></Route>
          <Route path='/teachers/:id' element={<TeachersDetails />}></Route>
          <Route path='/tafseer' element={<Tafsser />}></Route>
          <Route path='/tajweed' element={<Tajweed />}></Route>
          <Route path='/Revision' element={<Revision />}></Route>
          <Route path='/Islamic-Studies' element={<Studies />}></Route>
          <Route path='/pricing' element={<PricingPage />}></Route>
          <Route path='/pricing/:id' element={<PricingPage />}></Route>
        </Routes>
      </HashRouter>

    </div >
  );
}

export default App;
