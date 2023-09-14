'use client'
import React from 'react';
import Link from 'next/link';
import { useContext,createContext } from 'react'
import { ThemeContext } from '@/app/layout';
function Page(){
  const{cart,subtotal}=useContext(ThemeContext)
    return <div>
        
        <section className="text-gray-600  body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-full mx-auto flex flex-wrap">
      <div className="lg:w-full w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest"></h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">OrderId:{Math.floor(Math.random()*100000000)}</h1>
        <p className="leading-relaxed mb-4">Your order has successfully placed!</p>
        <div className="flex mb-4">
          <a className="flex-grow text-indigo-500 py-2 text-lg px-1 ">Description</a>
          <a className="flex-grow  py-2 text-lg px-1">Quantity</a>
          <a className="flex-grow  py-2 text-lg px-1">Price</a>
        </div>
       
       {Object.keys(cart).map(ele=>{
        return  <div key={cart[ele].name} className="flex border-t border-gray-200 py-2">
        <span className="text-gray-500 w-28 ">{cart[ele].name}</span>
        <span className="ml-auto text-gray-900">{cart[ele].qty}</span>
        <span className="ml-auto text-gray-900">{cart[ele].price}</span>
</div>
       })}
        
        <div className="flex">
          <span className="title-font  font-medium text-2xl text-gray-900">Total Amount :{subtotal}</span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"><Link href={"/trackorder"}>Track Your Order</Link></button>
          
        </div>
      </div>
     
    </div>
  </div>
</section>
    </div>;
}



export default Page;