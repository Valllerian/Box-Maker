import React from 'react'

const Box = (props) => {
    let width = props.width
    let height = props.height
    let color = props.color

    
  return (
      <div>
          <div style={{backgroundColor: `${color}`, width:`${width}px`, height:`${height}px`}}> </div>
          <div>Width:{width} Height: {height} Color: {color}</div>
      </div>
    
  )
}

export default Box