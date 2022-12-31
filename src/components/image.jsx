import React from 'react'
import '../styles/image.css'

function Image(props) {
  var url = 'https://source.unsplash.com/random/400x400/?' + props.id
  console.log(url)
  return (
    <div classsName = 'image'>
        <img src= {url} alt = 'Random'></img>
    </div>
  )
}

export default Image;