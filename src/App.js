import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import {
  Home, About, Blogs, Teachers, BlogDetails, Contact, Programms,
  TeachersDetails, PorgDetails, PricingPage
}
  from './pages'
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import LangOverlay from './components/LangOverlay';
import TopNav from './components/TopNav';
import Header from './components/Header';
import ModeOverlay from './components/ModeOver';
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
        <Link
          to={'https://wa.me/201013864939'}
          target='_blank'
          className=' start-chat bg-green-500 text-white  hover:bg-blue-500 
              w-[50px] h-[50px] rounded-[50%] flex justify-center items-center fixed text-[22px] 
              cursor-pointer z-50 bottom-5 lg:bottom-8 right-5 lg:right-8'>
          <FaWhatsapp />
          <span className='start-chat-hover capitalize'>
            {lang ? 'تواصل معنا الان ' : 'start chat now'}
          </span>
        </Link>
        <ModeOverlay />
        <LangOverlay />
        <TopNav />
        <Header />
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
          <Route path='/pricing' element={<PricingPage />}></Route>
          <Route path='/pricing/:id' element={<PricingPage />}></Route>
        </Routes>
      </HashRouter>

    </div >
  );
}

export default App;
