import React from 'react'
import styles from "./About.module.css"
import Typical from "react-typical"
import {Button} from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import myImg from "./Image/Prav_img.jpeg"
import Resume from "./Image/Pravhat-Ray_Resume.pdf"
import {FaFacebook, FaGithub,FaLinkedin} from "react-icons/fa"
import Tech from '../Tech_stack/Tech'
import {motion} from "framer-motion"
const About = () => {
  return (
    <>
   
 
    <div className={styles.intro}>
        <div className={styles.left}>
            <div className={styles.name}>
            <div className={styles.icons}>
            <IconButton size='lg'  icon={<FaGithub/>} />
             
            <IconButton size='lg'  icon={<FaLinkedin/>} />

            <IconButton size='lg'  icon={<FaFacebook/>} />
                
            </div>
                <span>Hello,I am Pravhat Ray</span>
                <span>
                    <h1>
                            <Typical
                            loop={Infinity}
                            steps={[
                                "A Full Stack Web Developer",
                                1500,
                                "A MERN Stack Web Developer",
                                1500,
                                "ReactJS | Javascript | ChakraUI | HTML | CSS",
                                1500,
                            ]
                            }
                            />
                        </h1>
                </span>
                <span>
                    Frontend Developer with high level of problem solving skills.
                    I have experience of 1200+ hours of coding and solved 100+ DSA questions.
                    Frontend Developer with high level of problem solving skills.
              
                </span>
            </div>
            <div className={styles.hire}>
            <Button width={"150px"} textColor={"black"} backgroundColor={'aqua'}>Hire</Button>
            <a href={Resume} download style={{textDecoration:"none"}}>
            <Button width={"150px"} textColor={"black"} backgroundColor={'aqua'}>Resume</Button>
            </a>
            </div>
            
        </div>

        <motion.div   whileHover={{scale:1.1}} className={styles.right}>
           <img className={styles.my_img} src={myImg} alt="my_Image" />
        </motion.div>

    </div>
    <Tech/>
    </>
  )
}

export default About