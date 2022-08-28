import React from 'react'
import {Link} from "react-router-dom"

const Actions = ({svg, name, navigateTo}) => {
  const style = {
    color : "rgb(172, 171, 171)",
    textDecoration : "none"
  }
  return (
    <>
      <Link to={navigateTo} className="btn btn-light w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-light pt-2">
        {svg}
        <p className="w-100 h-100 text-center m-0 p-0" href="/" style={style}>{name}</p>
      </Link>
    </>
  )
}

export default Actions;
