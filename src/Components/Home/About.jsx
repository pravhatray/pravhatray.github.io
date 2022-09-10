import React from 'react'
import styles from "./About.module.css"
import Typical from "react-typical"
import {Button} from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"

import {FaGithub,FaLinkedin} from "react-icons/fa"
const About = () => {
  return (
    <>
   
    <div className={styles.intro}>
        <div className={styles.left}>
            <div className={styles.name}>
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
                                "ReactJS | Javascript | ChakraUI | HTML | CSS Dev",
                                1500,
                            ]
                            }
                            />
                        </h1>
                </span>
                <span>
                    Frontend Developer with high level of problem solving skills.
                    I have experience of 1200+ hours of coding and solved 100+ DSA questions.
                </span>
            </div>
            <div className={styles.hire}>
            <Button backgroundColor={'teal'}>Hire</Button>
            <Button backgroundColor={'teal'}>Rescume</Button>
            </div>
            <div className={styles.icons}>
            <IconButton size='sm' m={2} icon={<FaGithub/>} />
             
            <IconButton size='sm' m={2} icon={<FaLinkedin/>} />
                
            </div>
        </div>

        <div className={styles.right}>
            I am right side
        </div>

    </div>
    
    </>
  )
}

export default About