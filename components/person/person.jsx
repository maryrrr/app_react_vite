import React from 'react'


export const Person = (props) => {
  return (
    <span>
    <h6>My name is {props.name}</h6>
    <h6>My surname is {props.surname}</h6>
    <h6>My age is {props.age} </h6>
    </span>
  )
}



