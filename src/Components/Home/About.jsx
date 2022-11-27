import React from 'react'
import styles from "./About.module.css"
import Typical from "react-typical"
import {Box, Button, Hide, Show, SimpleGrid, Text} from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import myImg from "./Image/Prav_img.jpeg"
import Resume from "./Image/Pravhat Ray-Resume.pdf"
import { FaGithub,FaLinkedin} from "react-icons/fa"

import {motion} from "framer-motion"
import { Link } from 'react-scroll'
import Icons from './Icons'
const About = () => {
  return (
    <>

    <SimpleGrid columns={[1,1,1,2]} name='Navbar' mb={'5%'} className={styles.intro}>
    <Show below='lg'>

<Box mt={'10%'}>
<motion.div   whileHover={{scale:1.1}} className={styles.right}>
<img className={styles.my_img} src={myImg} alt="my_Image" />
</motion.div>
</Box>
</Show>

        <Box className={styles.left}>
            <div className={styles.name}>
            <div className={styles.icons}>
             <Icons/>
            </div>



                <Text fontWeight='bold' fontSize='2rem' color={'black'}> Hello,I am Pravhat Ray</Text>
                <Hide below='md'>
                      <Text fontWeight='normal' fontSize='2.5rem' color={'#f4e16a'} className={styles.typical}>
                    <h1>
                            <Typical
                            loop={Infinity}
                          
                            steps={[
                                "A Full Stack Web Developer",
                                1500,
                                "A MERN Stack Developer",
                                1500,
                             
                            ]
                            }
                            />
                        </h1>
                </Text>
                </Hide>
              
                <Text fontWeight='normal' fontSize='1.2rem' color={'black'} className={styles.info}>
                Dedicated and efficient full stack web developer with 1200+ hours of
coding and solved 100+ numbers of DSA questions, with good problem solving skills. Seeking to further improve my skills as the company's
future full stack web developer.
                </Text>
            </div>
            <div className={styles.hire}>
           
             <Link to="contact" spy={true} smooth={true}>
               
                <Button _focus={{outline:"none"}}  className={styles.hire_btn} width={"130%"} textColor={"white"} backgroundColor={'black'}>Hire</Button>
      
                
        </Link>

            <a href={Resume} download style={{textDecoration:"none"}}>
            <Button _focus={{outline:"none"}}   width={"130%"} textColor={"white"} backgroundColor={'black'}>Download Resume</Button>
            </a>
            </div>
            
        </Box>
        <Hide below='lg'>

             <Box>
            <motion.div   whileHover={{scale:1.1}} className={styles.right}>
           <img className={styles.my_img} src={myImg} alt="my_Image" />
        </motion.div>
        </Box>
        </Hide>
       
        

    </SimpleGrid >

    </>
  )
}

export default About