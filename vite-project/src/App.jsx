import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HeaderFunct } from '../../components/headerFunct/headerFunct'
import { HomeFunct } from '../../components/homeFunct/homeFunct'


function App() {

  return (
    <div>
      <HeaderFunct />
      <HomeFunct />
    </div>
  )
}

export default App