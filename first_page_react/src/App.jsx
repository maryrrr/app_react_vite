import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HeaderFunct } from '../components/HeaderFunct/HeaderFunct'
import { HomeFunct } from '../components/HomeFunct/HomeFunct'
import HeaderClass from '../components/HeaderClass/HeaderClass'
import HomeClass from '../components/HomeClass/HomeClass'



function App() {
  

  return (
    <div>
      <HeaderFunct />
      <HomeFunct name="Mariana"/>
      <HeaderClass/>
      <HomeClass name="Mariana"/>
      

      
    </div>
  )
    
}

export default App
