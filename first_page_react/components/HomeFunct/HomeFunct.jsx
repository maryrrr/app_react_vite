import React from 'react'



const name="Mariana"
export const HomeFunct = (props) => {
  return (
    <div>
      
        
        <h2>¡Bienvenido a mi página personal!</h2>
        <section className='container-box'>
        <div className='descript'>
        <p>Me llamo {props.name} y estudio en The Bridge.</p>
        <p>Me quiero especializar en las siguientes tecnologías:</p>
        
        <ul>
          <li><a href="https://es.react.dev/learn">React</a></li>
          <li><a href="https://lenguajehtml.com/">HTML</a></li>
          <li><a href="https://lenguajecss.com/">CSS</a></li>
          <li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Introduction">JavaScript</a></li>
        </ul>
        </div>
        <img src='/elfi.jpg' alt='image'/>
        </section>
      </div>
  )
}






