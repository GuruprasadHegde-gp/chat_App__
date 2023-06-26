import { useEffect } from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import io from "socket.io-client"
function App() {
  useEffect(() => {
    const socket = io();

  }, [])


  return (
    <>
      <h1 className=' text-3xl'>Hey</h1>
      <LandingPage />
    </>
  )
}

export default App
