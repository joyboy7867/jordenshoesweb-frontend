"use client"
import { Space_Mono } from 'next/font/google';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Page = (props) => {
    const [product, setproduct] = useState([])
    useEffect(() => {
     async function getdata(){
      let data;
        fetch("https://jordenshoeswebbackend.onrender.com/api/getproduct").then(found=>{
          data=found.json().then(a=>{
            
            setproduct(a.shoes);
          })
          
        })
       
      }
      getdata();
      
    },[])
 
    return <div>
      
        <section className="text-gray-600 body-font">
          
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {Object.keys(product).map(ele=>{
        return <div key={product[ele]._id} className="lg:w-1/3  md:w-1/2 p-4 w-full shadow-md">
          <Link href={`/product/${product[ele].slug}`}>
        <span className="block relative h-98 rounded overflow-hidden">
          <img alt="ecommerce" className="object-fit w-[295px] sm:ml-18 m-auto object-center w-full h-full block" src={product[ele].img}/>
        </span>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product[ele].title}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{product[ele].desc}</h2>
          <p className="mt-1">{product[ele].price}</p>
        </div>
        </Link>
      </div>
      })}
     
      
      
      
     
     
      
      
    </div>
  </div>
</section>
                

         </div>;
}



export default Page;