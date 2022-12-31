import React from 'react'
import '../styles/dict.css'

function Dict(props) {
  return (
    <div className='dictdata'>
      <h2>{props.word}</h2>
      <small>{props.phonetic}</small>
      <p>{props.def}</p>
    </div>
  )
}

export default Dict