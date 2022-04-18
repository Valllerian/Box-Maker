import React from 'react'

const Box = (props) => {
    let width = props.width
    let height = props.height
    let color = props.color
  return (
    <div> Width:{width} Height: {height} Color: {color}</div>
  )
}

export default Box