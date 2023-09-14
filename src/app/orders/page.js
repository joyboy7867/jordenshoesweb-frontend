"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useContext,createContext } from 'react'
import { ThemeContext } from '@/app/layout';
const Page = () => {
    const [orders, setorders] = useState([])
    const{cart,user,setuser,key,setkey,id}=useContext(ThemeContext)
    
    
    let comdata={id}
    useEffect(() => {
        comdata={...comdata,cart}
        
         fetch("https://jordenshoeswebbackend.onrender.com/api/orderplaced",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(comdata)
         }).then(async found=>{

            setorders(await found.json())
            
        })
   
   }, [])
    
    return <div>
        <h1 className='font-bold text-center p-4 text-2xl'>My Orders</h1>
        <p className="text-center text-gray-400 p-4">Orders history will automatically get deleted in 10 working days!</p>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
               
                <th scope="col" className="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                
            </tr>
        </thead>
        <tbody>
            {orders.map(ele=>{
                return <tr key={ele.name} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {ele.product}
                </th>
                
                <td className="px-6 py-4">
                    {ele.qty}    
                </td>
                <td className="px-6 py-4">
                    {ele.price}
                </td>
                
            </tr> 
            })}
            
            
        </tbody>
    </table>
    <div className="flex my-5">
          <span className="title-font  font-medium text-2xl text-gray-900"></span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"><Link href={"/trackorder"}>Track Your Order</Link></button>
          
        </div>
</div>

    </div>;
}



export default Page;