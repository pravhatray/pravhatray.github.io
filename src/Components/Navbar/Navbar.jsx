import React from 'react'
import styles from "./Nav.module.css"
import { Box, Button, IconButton,  useColorMode } from "@chakra-ui/react"
import {FaSun,FaMoon} from "react-icons/fa"

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === "dark"
  return (
    <>
    
    <Box  className={styles.main}>
        <Box className={styles.left}>
                <Box className={styles.name}>
             
                    Web Developer
                    
                    </Box>
                           

        </Box>
        <Box className={styles.right}>
            <Box className={styles.list}>
                <ul>
                    <li>Home</li>
                    <li>Tech-Stack</li>
                    <li>Project-Blogs</li>
                   
                </ul>
            </Box>
            <Button>Contact me</Button>
            <IconButton size='sm' m={2} onClick={toggleColorMode} icon={isDark ? <FaSun /> : <FaMoon />} />
        </Box>

    </Box>
    
    
    </>
  )
}

export default Navbar