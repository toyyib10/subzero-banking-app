import React from 'react'

const Actions = ({svg, name}) => {
  const style = {
    color : "rgb(172, 171, 171)",
    textDecoration : "none"
  }
  return (
    <>
      <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center border pt-2">
        {svg}
        <a className="w-100 h-100 text-center" href="/" style={style}>{name}</a>
      </div>
    </>
  )
}

export default Actions;
