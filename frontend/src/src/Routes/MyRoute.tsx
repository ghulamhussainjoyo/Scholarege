import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Article from '../pages/Article';
import MyNavbar from '../components/MyNavbar';
import MyFooter from '../components/MyFooter';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Team from '../pages/Team';

function MyRoute() {
  return (
    <BrowserRouter>
      <MyNavbar
        name='Study Baithak'
      />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/scholarships' element={<Search />} />
        <Route path='/article' element={<Article />} />
        <Route path='/team' element={<Team />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  )
}

export default MyRoute