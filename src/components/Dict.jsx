import React, { useState } from 'react'
import '../styles/dict.css'

function Dict(props) {
  if(props.bool === false || props.word === ""){
    return(
    <div className='dictdata'>
      <h2>Dictionary</h2>
      <p>
        A Dictionary Web Application that gives definition, phonetic, and image for a given word.
      </p>
      <p>
        Type in the search box to get started.
      </p>
    </div>
    )
  }
  else{
    return(
      <div className='dictdata'>
      <h2>{props.word}</h2>
      <small>{props.phonetic}</small>
      <p>{props.def}</p>
    </div>
    )
  }
}

export default Dict