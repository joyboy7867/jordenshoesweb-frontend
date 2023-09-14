"use client"
import { useEffect, useState ,createContext } from 'react'
import Footer from '../../component/Footer'
import Navbar from '../../component/Navbar'
import LoadingBar from 'react-top-loading-bar'
import {  useSearchParams } from 'next/navigation'
import '../app/styles/globals.css'
import React, { Fragment } from "react";
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const ThemeContext = createContext();
 const metadata = {
  title: 'Step-up',
  description: 'Step-up into Style',
}

export default function RootLayout({children,...pageProps}){
  


  const [progress, setProgress] = useState(0)
  const [id, setid] = useState('')
  const [cart, setcart] = useState({})
  const [subtotal, setsubtotal] = useState(0);
  const [user,setuser]=useState({value:null})
  const [key,setkey]=useState(0)
  useEffect(() => {
    
    if(useSearchParams){
      setProgress(100)
    }
    try {
      if(localStorage.getItem("cart")){
        setcart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")))
      }
      
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
    const token=localStorage.getItem("token")
    if(token){
      setuser({value:token})
      setkey(Math.random())
    }
    
  },[useSearchParams()])
  
  const saveCart=(mycart)=>{
    localStorage.setItem('cart',JSON.stringify(mycart))
    let subt=0;
    let key=Object.keys(mycart)
    for(let i=0;i<key.length;i++){
      subt+=mycart[key[i]].price*mycart[key[i]].qty
    }
    setsubtotal(subt)
  }

  const addtocart=(itemcode,qty,price,name,size,variant)=>{
    let newcart=cart;
    if(itemcode in cart){
      newcart[itemcode].qty=cart[itemcode].qty+qty;
    }else{
      newcart[itemcode]={qty:1,price,name,size,variant}
    }
    console.log("addto cart click")
    setcart(newcart)
    saveCart(newcart)

  }
  // const logout=()=>{
    
  //   localStorage.removeItem("token")
  //  setuser({value:null})
  //   setkey(Math.random());
  // }

  const removetocart=(itemcode,qty,price,name,size,variant)=>{
    let newcart=cart;
    if(itemcode in cart){
      newcart[itemcode].qty=cart[itemcode].qty-qty;
    }
    if(newcart[itemcode]["qty"]<=0){
      delete newcart[itemcode];
    }
    setcart(newcart)
    saveCart(newcart)

  }

const clearcart=()=>{
  setcart({});
  saveCart({});
}

const store={
  cart,setcart
}



  return <>


<ThemeContext.Provider value={{id,setid,cart,setcart,addtocart,removetocart,saveCart,clearcart,subtotal,user,setuser,key,setkey}}>
    
    <html lang="en">
      
   
      
     
      
      <body className={inter.className}>
      <LoadingBar
        color='#f11946'
        progress={progress}
        loaderSpeed={300}
        transitionTime={500}
        onLoaderFinished={() => setProgress(0)}
      />
         <Navbar  addtocart={addtocart} removetocart={removetocart} clearcart={clearcart} subtotal={subtotal}/>
        {children}
          <Footer/>
         
      </body>
      

      </html>
</ThemeContext.Provider> 
    </>
    
    
  
}
