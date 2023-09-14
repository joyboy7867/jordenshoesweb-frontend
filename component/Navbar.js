"use client"
import React from 'react';
import Image from 'next/image';
import { useContext,createContext } from 'react'
import { ThemeContext } from '@/app/layout';
import Link from 'next/link';
import { AiOutlineShoppingCart,AiFillPlusCircle,AiFillMinusCircle } from 'react-icons/ai';
import { AiFillCloseCircle } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';
import { useRef } from 'react';
import { useRouter } from 'next/navigation'

const Navbar = ({addtocart,removetocart,clearcart,subtotal}) => {
   
    const{cart,user,setuser,key,setkey}=useContext(ThemeContext)
    const router=useRouter() 
    const ref = useRef()
    const logout=()=>{
        
            localStorage.removeItem("token")
            setuser({value:null})
            setkey(Math.random());
            clearcart();
            router.push("/")
    }
    const togglecart=()=>{
        
       document.getElementById("sidebars").classList.toggle("sidebar1");
    }
    

    return <div className='navbar flex flex-col md:flex-row md:justify-start justify-center items-center'>
         
        <div>
            <Image  src={"/pngegg.png"} alt='' width={80} height={40}></Image>
        </div>
        <div className="mb-2">
            <ul className='flex items-center space-x-3 font-bold'>
                <Link className='px-4' href={'/'}>Home</Link>
                <Link className='px-4'  href={"/shoes"}>shoes</Link>
                <Link className='px-4'  href={"/about"}>About</Link>
                <Link className='px-4'  href={"/contact"}>contact</Link>
            </ul>
        </div>
        <div  className='card2 dropdown'>
           {user.value&& <><MdAccountCircle/><div className="dropdown-content">
            <ul className="text-center">
                <li><Link href={'/orders'}> <button className=' text-sm hover:bg-blue-700 text-black font-bold p-2 rounded'>Orders</button> </Link></li>

                
                <li><button onClick={logout} className=' hover:bg-blue-700 text-sm text-black font-bold p-2 rounded'>Logout</button></li>
            </ul>
            </div></>}
           {!user.value&&<button className="bg-black-500 mb-4 text-sm hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2  px-4 border border-blue-500 hover:border-transparent rounded"> <Link href={'/login'}>Login</Link> </button>}
          
        </div>
        <div onClick={togglecart}  className='card'>
            <AiOutlineShoppingCart/>
        </div>
       

        <div ref={ref} id='sidebars'  className="sidebar  transform transition-transform translate-x-full" >
             <h1 className="text">Shopping cart</h1>
             {Object.keys(cart).length==0 && <div>No items in cart</div>}
            <ol className="list-decimal">
                {Object.keys(cart).map((k)=>{
                    return <li key={k}  className='li'>
                    <div className='productname' >{cart[k].name}</div>
                    
                    <div className='quantity'> <AiFillPlusCircle onClick={()=>{addtocart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className="mx-2 text-xl" />{cart[k].qty}<AiFillMinusCircle onClick={()=>{removetocart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className="mx-2 text-xl"/></div>
                    
                </li>
                })}
                
                

            </ol>
            <span  className="close"><button onClick={togglecart}><AiFillCloseCircle className="text-xl"/></button></span>
            <div className="flex"> <Link href={"/order"}> <button className='checkout font-bold'>CheckOut</button></Link>
            <button onClick={clearcart} className='checkout font-bold'>ClearCart</button></div>
           
        </div>
       
    </div>;
}



export default Navbar;