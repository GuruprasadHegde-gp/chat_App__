import { useEffect } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import io from "socket.io-client"
var socket = io.connect();
function App() {
  return (
    <>

      <LandingPage />
    </>
  )
}

export default App
