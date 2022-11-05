import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./Stats.module.css"
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';

const Stats = () => {


     useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
    <SimpleGrid columns={[2,4,4]} className={styles.stats} >
         <Box data-aos="fade-up"
                    data-aos-duration="1000">
        
        <Box className={styles.achievement}>
        <Box className={styles.circle} style={{color: '#facc15 '}}>1200+</Box>
        <span  style={{color: '#0e7490'}}>
            <Text fontSize='x-large' fontWeight='bolder'color={'#f4e16a'} >Hours of</Text>
             </span>
        <span>
            <Text fontSize='x-large' color={'#f4e16a'}>Coding</Text>
            </span>
        </Box>
        </Box>
   

         <Box data-aos="fade-up"
                    data-aos-duration="1800">
        
        <Box className={styles.achievement}>
        <Box className={styles.circle} style={{color: '#facc15 '}}>100+</Box>
        <span  style={{color: '#0e7490  '}}>
            <Text fontSize='x-large' fontWeight='bolder'color={'#f4e16a'} >Github</Text>
             </span>
        <span>
            <Text fontSize='x-large' color={'#f4e16a'}>Commits</Text>
            </span>
        </Box>
        </Box>

         <Box data-aos="fade-up"
                    data-aos-duration="2200">
        
        <Box className={styles.achievement}>
        <Box className={styles.circle} style={{color:'#facc15 '}}>5+</Box>
        <span  style={{color: '#0e7490  '}}>
            <Text fontSize='x-large' fontWeight='bolder'color={'#f4e16a'} >Projects</Text>
             </span>
        <span>
            <Text fontSize='x-large' color={'#f4e16a'}>Done</Text>
            </span>
        </Box>
        </Box>

         <Box data-aos="fade-up"
                    data-aos-duration="3000">
        
        <Box className={styles.achievement}>
        <Box className={styles.circle} style={{color: '#facc15 '}}>110+</Box>
        <span  style={{color: '#0e7490  '}}>
            <Text fontSize='x-large' fontWeight='bolder'color={'#f4e16a'} >Hours of</Text>
             </span>
        <span>
            <Text fontSize='x-large' color={'#f4e16a'}>Soft skills</Text>
            </span>
        </Box>
        </Box>


    </SimpleGrid>
    
    <Box mb={10}>
    <Text mt={5} fontSize={'xx-large'} fontWeight='semibold' color={'#f4e16a'} textAlign='center'>GITHUB STATS</Text>
    </Box>

    <Box  width={['95%','80%','65%']} m='auto' mb={'20px'} >
    <GitHubCalendar username="pravhatray"  />
    </Box>
    {/* <Flex width={"90%"} >
        
         
         
    </Flex> */}
    <SimpleGrid columns={[1,2,2,3]} className={styles.stats} >
   
    <Box>
    <Image src="https://github-readme-stats.vercel.app/api?username=pravhatray&include_all_commits=false&count_private=false" ></Image>
    </Box> 
    <Box>
    <Image src="https://github-readme-streak-stats.herokuapp.com/?user=pravhatray" ></Image>
    </Box>
    <Box>
    <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=pravhatray&include_all_commits=false&count_private=false&layout=compact" ></Image>
    </Box>
    </SimpleGrid>
    </>
  )
}

export default Stats