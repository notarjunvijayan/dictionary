import React from 'react'

function Image(props) {
  var url = 'https://source.unsplash.com/random/400x400/?' + props.id
  console.log(url)
  return (
    <div>
        <img src= {url} alt = 'Random'></img>
    </div>
    
  )
}

export default Image;