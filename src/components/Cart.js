import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {remove} from "../store/cartslice"
export default function Cart() {
    const dispatch=useDispatch();
    const items=useSelector((state)=>state.carts)
    const removefromcart=(e)=>{
        dispatch(remove(e))
    }
  return (
    <div className='cart'>
        <div className="cartitems">
        {items.map((element)=>{
            return(
                <div className="itemstructure" key={element.id}>
                <img src={element.image} alt="img" />
                <h3>Price:{element.price} <span><button onClick={()=>{removefromcart(element.id)}}>Remove</button></span></h3>
        </div>
            )
        })}
        </div>
    </div>
  )
}
