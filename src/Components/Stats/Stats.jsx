import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./Stats.module.css"
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Stats = () => {


     useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
    <SimpleGrid columns={[2,3,4,6]} className={styles.stats} >
         <Box data-aos="fade-up"
                    data-aos-duration="1000">
        
        <Box className={styles.achievement}>
        <Box className={styles.circle} style={{color: '#facc15 '}}>1200+</Box>
        <span  style={{color: '#0e7490'}}>
            <Text fontSize='x-large' fontWeight='bolder'>Hours of</Text>
             </span>
        <span>
            <Text fontSize='x-large'>Coding</Text>
            </span>
        </Box>
        </Box>
        
         <Box data-aos="fade-up"
                    data-aos-duration="1400">
        
        <Box className={styles.achievement}>
        <Box className={styles.circle} style={{color: '#facc15 '}}>150+</Box>
        <span  style={{color: '#0e7490  '}}>
            <Text fontSize='x-large' fontWeight='bolder'>Numbers of</Text>
             </span>
        <span>
            <Text fontSize='x-large'>DSA Problems</Text>
            </span>
        </Box>
        </Box>

         <Box data-aos="fade-up"
                    data-aos-duration="1800">
        
        <Box className={styles.achievement}>
        <Box className={styles.circle} style={{color: '#facc15 '}}>100+</Box>
        <span  style={{color: '#0e7490  '}}>
            <Text fontSize='x-large' fontWeight='bolder'>Github</Text>
             </span>
        <span>
            <Text fontSize='x-large'>Commits</Text>
            </span>
        </Box>
        </Box>

         <Box data-aos="fade-up"
                    data-aos-duration="2200">
        
        <Box className={styles.achievement}>
        <Box className={styles.circle} style={{color:'#facc15 '}}>5+</Box>
        <span  style={{color: '#0e7490  '}}>
            <Text fontSize='x-large' fontWeight='bolder'>Projects</Text>
             </span>
        <span>
            <Text fontSize='x-large'>Done</Text>
            </span>
        </Box>
        </Box>

         <Box data-aos="fade-up"
                    data-aos-duration="3000">
        
        <Box className={styles.achievement}>
        <Box className={styles.circle} style={{color: '#facc15 '}}>110+</Box>
        <span  style={{color: '#0e7490  '}}>
            <Text fontSize='x-large' fontWeight='bolder'>Hours of</Text>
             </span>
        <span>
            <Text fontSize='x-large'>Soft skills</Text>
            </span>
        </Box>
        </Box>


         <Box data-aos="fade-up"
                    data-aos-duration="3000">
        
        <Box className={styles.achievement}>
        <Box className={styles.circle} style={{color: '#facc15 '}}>10+</Box>
        <span  style={{color: '#0e7490  '}}>
            <Text fontSize='x-large' fontWeight='bolder'>Numbers of</Text>
             </span>
        <span>
            <Text fontSize='x-large'>Presentation</Text>
            </span>
        </Box>
        </Box>
    </SimpleGrid>
    
    
    </>
  )
}

export default Stats