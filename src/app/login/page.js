'use client'
import React, { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext,createContext } from 'react'
import { ThemeContext } from '@/app/layout';
import { useRouter } from 'next/navigation'
import Link from 'next/link';
export default function Page (){
    const [user, setuser] = useState({})
    const{id,setid}=useContext(ThemeContext)
    const router = useRouter()
    useEffect(() => {
        if(localStorage.getItem('token')){
            router.push('/shoes')
        }
    }, [])
    function handlechange(e){
        setuser({...user,[e.target.name]:e.target.value})
        
    }
    async function handlesubmit(e){
        await fetch("https://jordenshoeswebbackend.onrender.com/api/login",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(user)
        }).then(async found=>{
            let a=await found.json();
            if(a.success){
                setid(a.data.user);
               localStorage.setItem("token",a.jwtdata);
                toast.success('Login successfull', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                    setTimeout(() => {
                        router.push("/shoes")    
                    }, 1000);
                    
            }else{
                toast.error('Invalid Credentials !!!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }
        })
    }
    return <div>
             <ToastContainer />
<div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
    <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="text-center font-bold">
               <h2>Welcome to Step-Up!</h2>
            </div>
            <div className="mt-12 flex flex-col items-center">
                <h1 className="text-2xl xl:text-3xl font-extrabold">
                    Login
                   
                </h1>
                <p className="text-blue-800">Or <Link href={"/signup"}>sign-up</Link></p>
                <div className="w-full flex-1 mt-8">
                    <div className="flex flex-col items-center">
                        
                    </div>


                    <div className="mx-auto max-w-xs">
                        <input
                            onChange={handlechange} name='email'
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="email" placeholder="Email" />
                        <input
                            onChange={handlechange} name='password'
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="password" placeholder="Password" />
                        <button
                            onClick={handlesubmit}
                            className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="8.5" cy="7" r="4" />
                                <path d="M20 8v6M23 11h-6" />
                            </svg>
                            <span className="ml-3">
                                Login
                            </span>
                        </button>
                        <p className="mt-6 text-xs text-gray-600 text-center">
                            
                            <a href="#" className="border-b border-gray-500 border-dotted">
                                Terms of Service
                            </a>
                            and its
                            <a href="#" className="border-b border-gray-500 border-dotted">
                                Privacy Policy
                            </a>
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                style={{backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')"}}>
            </div>
        </div>
    </div>
</div>


    </div>;
}



