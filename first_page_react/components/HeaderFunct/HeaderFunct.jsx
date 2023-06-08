import React from 'react'

export const HeaderFunct = () => {
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
    );
}