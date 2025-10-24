import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Bhajan from './pages/Bhajan'
import Biography from './pages/Biography'
import Bussiness from './pages/Bussiness'
import Contact from './pages/Contact'
import Documentary from './pages/Documentary'
import Empire from './pages/Empire'
import Facts from './pages/Facts'
import FilmIndustry from './pages/FilmIndustry'
import GPeople from './pages/GPeople'
import HPeople from './pages/HPeople'
import Literature from './pages/Literature'
import Monarch from './pages/Monarch'
import Pooja from './pages/Pooja'
import Sangh from './pages/Sangh'
import Sessions from './pages/Sessions'
import Shop from './pages/Shop'
import Symposium from './pages/Symposium'
import WJglory from './pages/WJglory'
import Aarti from './pages/Aarti'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/aarti" element={<Aarti/>} />
        <Route path="/bhajan" element={<Bhajan/>} />
        <Route path="/biography" element={<Biography/>} />
        <Route path="/bussiness" element={<Bussiness/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/documentary" element={<Documentary/>} />
        <Route path="/empire" element={<Empire/>} />
        <Route path="/facts" element={<Facts/>} />
  <Route path="/film_industry" element={<FilmIndustry/>} />
  <Route path="/gpeople" element={<GPeople/>} />
  <Route path="/hpeople" element={<HPeople/>} />
        <Route path="/literature" element={<Literature/>} />
        <Route path="/monarch" element={<Monarch/>} />
        <Route path="/pooja" element={<Pooja/>} />
        <Route path="/sangh" element={<Sangh/>} />
        <Route path="/sessions" element={<Sessions/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/symposium" element={<Symposium/>} />
        <Route path="/wjglory" element={<WJglory/>} />
      </Routes>
    </div>
  )
}
