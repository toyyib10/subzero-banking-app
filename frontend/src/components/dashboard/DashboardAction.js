import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Card from "./quickactions/Card"
import Main from "./quickactions/Main"
import NotFound from "../../starters/NotFound"

const DashboardAction = () => {
  const height = {
    height : "32em"
  }
  const style = {
    height : "180%",
    width: "35%"
  }
  return (
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/viewcard" element={<Card/>}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
  )
}

export default DashboardAction;
