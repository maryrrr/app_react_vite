import React from 'react'

const name="Alex"
const surname="Saxon"
const age=29


export const UserFunc = () => {
  return (
    <div>
    <h1 className='text-colorB'>User Functional</h1>
    <h2>My name is {name}</h2>
    <h2>My surname is {surname}</h2>
    <h2>My age is {age} </h2>
    </div>
  )
}



