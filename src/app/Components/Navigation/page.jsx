"use client"
import Link from 'next/link'

export default function Navigation(){
    return(
        <div className='text-white bg-black flex justify-between ' >
            <div>JJ</div>
            <div className='mr-10'>
                <Link href="/">About me</Link>
              <Link href="/">Skills</Link>
              <Link href="/">Portfolio</Link>
              <Link href="/">Contact Me</Link>



            </div>
        </div>
    )
}