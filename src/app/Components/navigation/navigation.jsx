"use client"
import {useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence} from 'framer-motion';
import Link from 'next/link'

export default function Navigation(){
    const [ShowNav,setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isOpen,setIsOpen] = useState(false);
    

    useEffect(() =>{
        const handleScroll = () =>{
            const currentScrollY = window.scrollY;
            if(currentScrollY > lastScrollY){
                setShowNav(false);
            } else{
                setShowNav(true);
            }
           setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll',handleScroll);
        return () => window.removeEventListener('scroll',handleScroll)
    },[lastScrollY]);




    return(
     
        <div  className={`fixed top-0 w-full transition-transform duration-300 ease-in-out bg-white/80 lg:h-fit  h-[3rem]  z-50 ${
    ShowNav ? 'translate-y-0' : '-translate-y-full'
  } flex  lg:flex-row flex-col ` } >

           <div className='justify-between lg:w-full  flex px-[1rem] lg:px-[orem]' >
            <Link href='#homepage' className='font-extrabold text-[2rem] lg:ml-[6rem] '>JBOBO</Link>
            <div className='mr-[2px] lg:mr-[2rem] lg:flex group hidden gap-4'>
 
                 {
                NavLinks.map((item,index)=>(
                   
                    <Link key={index} className='cursor-pointer group-hover:opacity-50 flex  items-center hover:opacity-100
                    transition-opacity duration-500 ease-in-out ' href={item.link}>{item.linkDetails}</Link>

                ))
              }
             

            </div>

{/* ${isOpen ? 'translate-y-[0%]':'-translate-y-[125%] '}  */}

<div className='lg:hidden' >
<XButton  isOpen={isOpen} setIsOpen={setIsOpen}/>
</div>
</div>

{useEffect(() => { 
    isOpen?setIsOpen(ShowNav):""
},[ShowNav])}
      <div className={`-translate-y-[125%]  ${
    isOpen ? 'translate-y-0' : '-translate-y-[125%]'
  }  transition-transform duration-500 ease-in-out lg:hidden `}>
    {console.log(isOpen)}

            <Navslide/>
        </div>



        </div>
        
  


       
       
            )    
    } 






    function Navslide(){
        return(
            <>
             {
                NavLinks.map((item,index)=>(
                    <div key={index} className='flex justify-center items-center bg-white/80' >
                   
                    <Link key={index} className='cursor-pointer group-hover:opacity-50 flex items-center py-[1rem] hover:opacity-100
                    transition-opacity duration-500 ease-in-out ' href={item.link}>{item.linkDetails}</Link>
</div>
                ))
              }
            </>
        )
    }





    function XButton({isOpen,setIsOpen}){

        return(
            <button onClick={() => setIsOpen(!isOpen)} className='flex flex-col justify-center items-center w-10 h-10 focus:outline-none' >
<span  className={`block w-8 h-0.5 bg-black rounded transition-transform duration-300 ease-in-out ${isOpen?'rotate-45 translate-y-1.5':''} my-1 `}></span>
  <span
        className={`block w-8 h-0.5 bg-black rounded transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-0' : 'opacity-100'
        } `}
      ></span>
      <span
        className={`block w-8 h-0.5 bg-black rounded transition-transform duration-300 ease-in-out ${
          isOpen ? '-rotate-45 -translate-y-1.5' : ''
        } my-1`}
      ></span>

</button>
        )
    }


    const NavLinks = [
        {
            link:"#aboutMe",
            linkDetails:"About Me",
        },
         {
            link:"#skills",
            linkDetails:"Skills",
        }, {
            link:"#portfolio",
            linkDetails:"Portfolio",
        }, {
            link:"#contact",
            linkDetails:"Contact Me",
        }, 
    ]