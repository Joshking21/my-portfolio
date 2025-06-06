'use client';
import { motion } from 'framer-motion';

export default function MotionFadeInSection({ children}){
    return(
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.5}} viewport={{once:true, amount:0.3}}>
            {children}
        </motion.div>
    )
}
export function MotionFadeLeftSection({children}){
    return(<motion.div initial={{opacity:0, x:-10}} whileInView={{opacity:1,x:0}} transition={{duration:0.5}} viewport={{once:true, amount:0.3}}>
            {children}
        </motion.div>)
}

export function MotionFadeRightSection({children}){
    return(<motion.div initial={{opacity:0, x:10}} whileInView={{opacity:1,x:0}} transition={{duration:0.5}} viewport={{once:true, amount:0.3}}>
            {children}
        </motion.div>)
}