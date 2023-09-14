"use client"
import React from 'react';
import { useContext,createContext } from 'react'
import { ThemeContext } from '@/app/layout';
import Link from 'next/link';
import { AiFillPlusCircle,AiFillMinusCircle } from 'react-icons/ai';
import { AiFillCloseCircle } from 'react-icons/ai';
import Head from 'next/head';
import Script from 'next/script';
export default function Page(){
    const{cart,setcart,addtocart,saveCart,removetocart,clearcart,subtotal}=useContext(ThemeContext)
    
    return <div>
       
    <h1 className="text-center font-bold text-2xl my-8" >CheckOut</h1>
  <Head><meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/></Head>
<Script type='application/javascript'crossOrigin='anonymous'src='{PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/{MID}.js'onLoad='onScriptLoad();'></Script>

<section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Delivery Detail</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label for="message" className="leading-7 text-sm text-gray-600">Address</label>
            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-gray-600">State</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-gray-600">City</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-gray-600">Pincode</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-gray-600">Contact-no</label>
            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
       

        {/* <div className="text-left my-6">
        <div    className=" text-center maindivorder" >
             <h1 className=" my-6 py-6  text-3xl">Shopping cart</h1>
             {Object.keys(cart).length==0 && <div>No items in cart</div>}
            <ol className="list-decimal">
                {Object.keys(cart).map((k)=>{
                    return <li key={k}  className="flex w-full text-center ">
                    <div className="text-2xl mx-6 w-auto text-center" >{cart[k].name}</div>
                    
                    <div className="flex checkoutbuttons  w-auto  my-1"> <AiFillPlusCircle onClick={()=>{addtocart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className="mx-2 text-xl" />{cart[k].qty}<AiFillMinusCircle onClick={()=>{removetocart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className="mx-2 text-xl"/></div>
                    
                </li>
                })}
                
                

            </ol>
            
            <div className="flex justify-center"> <Link href={"/order"}> <button className='checkout'>CheckOut</button></Link>
            <button onClick={clearcart} className='checkout'>clearCart</button></div>
            <div className="total"><h1>Total:{subtotal}</h1></div>
           
        </div>
        </div> */}
        










                
    <h1 className="mb-5 mt-5 text-center text-2xl font-bold">Cart Items</h1>
    <div className="mx-auto max-w-5xl justify-center">
      <div className="rounded-lg md:w-2/3 lg:w-full mt-11">
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
         
 
 <ol className="list-decimal">
                {Object.keys(cart).map((k)=>{
                    return <div key={k} className=" p-4 pl-15 pr-25 sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">{cart[k].name}</h2>
                   
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center ml-10 border-gray-100">
                        <span  onClick={()=>{removetocart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                        <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={cart[k].qty} min="1" />
                        <span onClick={()=>{addtocart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <h4 className='font-bold'>Price :</h4>
                        <p className="text-sm">{cart[k].price}</p>
                        
                      </div>
                     
                    </div>
                    
                  </div>
                })}
               {Object.keys(cart).length===0?"Cart is empty!!":<><div className="flex w-full justify-center"> <Link href={"/payments"}> <button className='checkout'>Pay Now</button></Link>
                </div>
                 <div className="total"><h1>Total:{subtotal}</h1></div></>}
                

            </ol>
         
         
          
        </div>
        
      </div>
    </div>
  </div>

                    
               
                
                

           

       



        
      </div>
    </div>
  
</section>


    </div>;
}


