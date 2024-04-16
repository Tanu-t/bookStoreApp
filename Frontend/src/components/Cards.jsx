/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const Cards = ({item}) => {

  return (
    <>
    <div className='mt-4 my-3 p-3'>
     <div className="card w-90 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge bg-purple-500 text-white">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">₹{item.price}</div> 
      <div className="hover:bg-purple-500 rounded-full border-[2px] hover:text-white px-2 py-1 duration-200 cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default Cards
