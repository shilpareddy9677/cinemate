import React from 'react'
import "./App.css"
import {AllRouts} from "./routes/AllRouts"
import {Header,Footer} from "./component"

export default function App() {
  return (
    <div>
      <Header/>
      <AllRouts/>
      <Footer/>
    </div>
  )
}

