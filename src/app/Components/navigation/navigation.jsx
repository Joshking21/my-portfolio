"use client"
import {useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence} from 'framer-motion';
import Link from 'next/link'

export default function Navigation(){
    const [ShowNav,setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0)

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
        <div  className={`fixed top-0 w-full transition-transform duration-300 ease-in-out bg-white/80 z-50 ${
    ShowNav ? 'translate-y-0' : '-translate-y-full'
  } flex justify-between  ` } >
           
            <div className='font-extrabold text-[2rem]  ml-[6rem] '>JBOBO</div>
            <div className='mr-10   flex'>
                <Link href="/" className=' flex  items-center'>About me</Link>
              <Link href="/" className=' flex  items-center'>Skills</Link>
              <Link href="/" className=' flex  items-center'>Portfolio</Link>
              <Link href="/" className=' flex  items-center'>Contact Me</Link>



            </div>
        </div>
       
            )    
    } 
