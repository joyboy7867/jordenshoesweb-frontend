import Image from 'next/image'
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'
import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
export default function Home(props) {
  
  return (<>
  
  <div className={'homepage border-none'}>
  <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover border-r-14 object-center rounded" alt="hero" src="/jorden.jpg"/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium font-extrabold font-serif text-white">Step Up Your Game with Jordan Sneakers</h1>
      <p className="mb-8 leading-relaxed text-white">I can accept failure, everyone fails at something. But I cant accept not trying. - Michael Jordan</p>
      <div className="flex justify-center">
      <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
          </svg>
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
            <span className="title-font font-medium">Google Play</span>
          </span>
        </button>
        <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-gray-200 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
            <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
            <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
          </svg>
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs text-gray-600 mb-1">Download on the</span>
            <span className="title-font font-medium">App Store</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-4 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap text-center justify-center ">
      <h1 className="text-white text-4xl pb-5 text-center justify-center">Jumpman Shoes</h1>
      <p className="text-white">Jordan shoes, named after the legendary basketball player Michael Jordan, have left an indelible mark on both athletic footwear and pop culture. Since their debut in 1985, these shoes have become iconic, known for their unique and bold designs. They feature distinctive elements like the Jumpman logo, eye-catching colorways, and a silhouette that reflects Michael Jordans playing style. </p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfQWi0i2wSfBBMsxT0Bv6247KIehbWhGVLhQ&usqp=CAU"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.unsplash.com/photo-1612821745127-53855be9cbd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9yZGFuJTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://images.pexels.com/photos/12725055/pexels-photo-12725055.jpeg?cs=srgb&dl=pexels-hamza-nouasria-12725055.jpg&fm=jpg"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://images.unsplash.com/photo-1615420830426-a3484174cf1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8am9yZGFuJTIwc2hvZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://c0.wallpaperflare.com/preview/271/353/255/cosmetics-deodorant-jordan-3-jordan-sneakers.jpg"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://w0.peakpx.com/wallpaper/110/300/HD-wallpaper-michael-jordan-23-23-air-air-jordan-bulls-chicago-bulls-finals-jordan-michael-jordan-mvp-nba-thumbnail.jpg"/>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-600 body-font text-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">What you will Get ?</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">I still have my feet on the ground, I just wear better shoes</p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-indigo-800 text-lg title-font font-medium mb-3">Return and Exchange Policy</h2>
          <p className="leading-relaxed text-base">Clearly communicate your stores return and exchange policy to ensure customer satisfaction.</p>
          
           
          
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className=" text-indigo-800 text-lg title-font font-medium mb-3">Special Orders</h2>
          <p className="leading-relaxed text-base"> Allow customers to place special orders for specific shoe styles, colors, or sizes that may not be in stock.</p>
          
           
          
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-indigo-800 text-lg title-font font-medium mb-3">Custom Fitting Services</h2>
          <p className="leading-relaxed text-base">Consider offering custom shoe fitting services for customers with specific orthopedic or comfort needs.</p>
          
            
          
        </div>
      </div>
      
    </div>
    
  </div>
 
</section>
<div className="custom-shape-divider-bottom-1694693222 border-none">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
  </div>
  
  
  </>
    
  )
}
