import React from 'react'
import useClima from '../hooks/useClima'
const Resultado = () => {
    const {resultado} = useClima()
    const {name, main} = resultado
  return (
    <div className='contenedor clima'>
        <h2>El Clima de {name} es:</h2>
        <p>{main.temp}<span>°C</span></p>
        <div className='temp_min_max'>
        <p>Min: {main.temp_min}<span>°C</span></p>
        <p>Max: {main.temp_max}<span>°C</span></p>
        </div>
    </div>
  )
}

export default Resultado