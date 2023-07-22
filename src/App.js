import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import "./App.css"
import Home from "./components/Home"
import Cart from "./components/Cart"
import Navbar from "./components/Navbar"
import { Provider } from 'react-redux'
import store from "./store/store"
export default function App() {
  return (
    <>
    <Provider store={store}>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
      </Provider>
    </>
  )
}
