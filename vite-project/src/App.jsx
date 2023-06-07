import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserClass from '../../components/userClass/userClass'
import { UserFunc } from '../../components/userFunc/userFunc'
import { Person } from '../../components/person/person'


// const name="Maria"
// const surname="Gonzales"
// const age=33
// const User = () => {

//   return (<div>
//     <h2>My name is {name}</h2>
//     <h2>My surname is {surname}</h2>
//     <h2>My age is {age} </h2>

// </div>
//   )
//   }

function App() {

  return (
    <div>
      <span className="person-container">
      <Person name="Helen" surname="Borisiv" age={36} />
      <Person name="Lucas" surname="Brica" age={12} />
      <Person name="mateo" surname="Roca" age={22} />
      </span>
      <UserFunc/>
      <UserClass/>

      </div>

    
  )
}

export default App
