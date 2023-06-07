import React, { Component } from 'react'

const name="Frodo"
const surname="Jamaica"
const age=49

export default class UserClass extends Component {
  render() {
    return (
      <div>
    <h1 className='text-color'>User Class</h1>
    <h2>My name is {name}</h2>
    <h2>My surname is {surname}</h2>
    <h2>My age is {age} </h2>
    </div>
    )
  }
}

