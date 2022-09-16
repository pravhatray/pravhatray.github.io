import React, { useEffect, useState } from 'react'
import styles from './Tech.module.css'
import {motion} from "framer-motion"
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { SimpleGrid, Text} from "@chakra-ui/react"
import dsa from "../Skills/tools/dsa.jpg"
const techy=[
  {
      "id":1,
      "title":"MongoDB",
      "icon":"https://www.pngitem.com/pimgs/m/184-1843023_svg-mongodb-logo-png-transparent-png.png"
  },
  {
      "id":2,
      "title":"Express",
      "icon":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLa2nNXqq_0e-ABMTyhM3qcsJlA27GNSaIKQ&usqp=CAU"
      
  },
  {
      "id":3,
      "title":"React JS",
      "icon":"https://res.cloudinary.com/practicaldev/image/fetch/s--EiR7avTe--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/i21e0qpkymaff4w7h8av.png"
  },
  {
      "id":4,
      "title":"Node jS",
      "icon":"https://i.pinimg.com/474x/f3/4a/02/f34a0218dd2e38726c52ac763df55fa7.jpg"
  },
  {
     "id":5,
     "title":"DSA",
     "icon":"https://www.shivamtech.in/wp-content/uploads/2019/02/data_structure_training_in_Ranchi.jpg"
  }
 

 
]

const Tech = () => {
  

useEffect(()=>{
  Aos.init();
},[])
  
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <>

<div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <Text fontSize={'xx-large'} fontWeight='semibold' color={'#075985 '} textAlign='center' mb={4} >TECH-STACKS</Text>
    
        <SimpleGrid name='tech-stack' columns={[2,2,3,5]} className={styles.cards}>

        {
        techy.map((a)=>{
          return(
            <>
            
          <div >
            <motion.div
              whileHover={{scale:1.2}}
              transition={transition}>
                <img src={a.icon}
               
                alt="icons" />
               
              </motion.div>
          
          </div>

             </>
          )
        })
      }
        </SimpleGrid>

 
    </div>

    
      </>
  )
}

export default Tech