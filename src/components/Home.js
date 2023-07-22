import React from 'react'
import Productitem from "./Productitem"
export default function Home() {
  return (
    <div className='home'>
      <h2>Welcome To The Redux Store</h2>
      <ul>
        <h3>Products</h3>
      </ul>
      <div className="productlist">
      <Productitem/>
      </div>
    </div>
  )
}
