import React, { Component } from 'react'

export default class HeaderClass extends Component {
  render() {
    return (
        <header>
        <nav className='container'>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/proyectos">Proyectos</a>
            </li>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
