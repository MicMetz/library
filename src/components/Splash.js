import { motion } from "framer-motion";
import Image from "next/image";
import React, { useMemo} from "react";
import LogoHookWhite from "../../public/icons/logo-hook-white.svg";



const transition = ( { duration, ease } ) => {
  return {
    duration: duration || 2.5,
    ease    : ease || [ 0.87, 0.1, -0.13, 1 ]
  }
}


const variants = {
  visible: { top: '-100vh', transition: { ...transition, delay: 10 } },
  hidden : { opacity: 0, display: 'none' },
}



export default function SplashScreen() {
  const splash = useMemo( () =>
    <>
      <motion.div
        initial = {{ opacity: 1 }}
        animate = {{ opacity: 0, display: 'none', transition: { ...transition, delay: 10 } }}
        // transition = {{ duration: 9, delay: 0.1 }}
        style = {{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'black', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}
        // onAnimationComplete = {() => setIsAlreadyShown( true )}
      >
        <div className = "preloader__forwards__wrapper" >
          <motion.div
            initial = {{ x: -10, opacity: 1 }}
            animate = {{ x: 0, opacity: 1, transition: { ...transition } }}
            className = "preloader__forwards__left"
          >
            <Image src = {LogoHookWhite} alt = "Logo" style = {{ color: 'white' }} />
          </motion.div >
          <motion.div
            initial = {{ x: 10, opacity: 1 }}
            animate = {{ x: 0, opacity: 1, transition: { ...transition } }}
            className = "preloader__forwards__right"
          >
            <p className = "preloader__forwards__text" >Michael Metzger</p >
            <p className = "preloader__forwards__text" >There are decades</p >
            <p className = "preloader__forwards__text" >where nothing happens;</p >
            <p className = "preloader__forwards__text" >and there are weeks</p >
            <p className = "preloader__forwards__text" >where decades happen.</p >
          </motion.div >
        </div >
      </motion.div >
  </>, [] )

  return splash

}
