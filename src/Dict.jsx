import React from 'react'

function Dict(props) {
  return (
    <div><h2>{props.word}</h2>
    <h3>{props.phonetic}</h3>
    <p>{props.def}</p>
    </div>
  )
}

export default Dict