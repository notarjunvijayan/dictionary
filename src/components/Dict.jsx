import React from 'react'
import '../styles/dict.css'

function Dict(props) {
  return (
    <div className='dictdata'>
      <h2>{props.word}</h2>
      <h3>{props.phonetic}</h3>
      <p>{props.def}</p>
    </div>
  )
}

export default Dict