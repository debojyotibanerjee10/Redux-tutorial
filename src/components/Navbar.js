import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"

export default function Navbar() {
    const items=useSelector((state)=>state.carts)
  return (
    <>
    <div className="navbar">
        <ul>
            <li>Redux Store</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li>Cart Items: {items.length}</li>
        </ul>
    </div>
    </>
  )
}
