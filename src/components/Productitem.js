import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {add} from "../store/cartslice"

export default function Productitem() {
    const dispatch=useDispatch()
    const [items,setitems]=useState([]);
    useEffect(()=>{
        fetchdata();
    },[])
    const fetchdata=async()=>{
        const res=await fetch("https://fakestoreapi.com/products");
        const data=await res.json();
        setitems(data);
    }
    const addtocart=(element)=>{
        dispatch(add(element));
    }
  return (
  <>
  <div className="productitem">
  <div className="productitems">
{items.map((element)=>{
    return(
        <div className="itemstructure" key={element.id}>
            <img src={element.image} alt="img" />
            <h3>Price:{element.price} <span><button onClick={()=>{addtocart(element)}}>Add to cart</button></span></h3>
        </div>
    )
})}
</div>
</div>
  </>
  )
}
