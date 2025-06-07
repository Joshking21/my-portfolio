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
  } flex justify-between ` } >
           
            <Link href='#homepage' className='font-extrabold text-[2rem] ml-[6rem] '>JBOBO</Link>
            <div className='mr-[2px] flex group gap-3'>
 
                 {
                NavLinks.map((item,index)=>(
                   
                    <Link key={index} className='cursor-pointer group-hover:opacity-50 flex items-center hover:opacity-100
                    transition-opacity duration-500 ease-in-out ' href={item.link}>{item.linkDetails}</Link>

                ))
              }
             

            </div>
        </div>
       
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