import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './components/LandingPage'
import Room from "./components/Room"
import io from "socket.io-client"
import './App.css'
var socket = io.connect();
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/Room' element={<Room />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
