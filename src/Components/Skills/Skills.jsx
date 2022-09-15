import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import chakra from './images/chak.jpg'
import css from './images/css.jpg'
import express from './images/express.png'
import html from './images/html.jpg'
import javascript from './images/javascript.jpg'
import mongodb from './images/mongodb.png'
import nodejs from './images/nodejs.jpg'
import rect from './images/rect.png'
import reducs from "./images/reducs.jpg"
import router from "./images/routerdom.png"
import styles from './Skills.module.css'
import type from "./images/type.png"
import git from "./tools/git.jpg"
import github from "./tools/github.png"
import heroku from "./tools/heroku.png"
import json from "./tools/json.png"
import netlify from "./tools/netlify.png"
import npm from "./tools/npm.png"
import postman from "./tools/postman.jpg"
import vercel from "./tools/vercel.jpg"
import dsa from "./tools/dsa.jpg"
import Aos from 'aos';
import 'aos/dist/aos.css';




const front = [
  {
    id: 1,
    icon: html
  },
  {
    id: 2,
    icon: css
  },
  {
    id: 3,
    icon: javascript
  },
  {
    id: 4,
    icon: rect
  },
  {
    id: 5,
    icon: chakra
  },
  {
    id: 6,
    icon: type
  },
]

const back = [
  {
    id: 1,
    icon: mongodb
  },
  {
    id: 2,
    icon: express
  },
  {
    id: 3,
    icon: nodejs
  },
  {
    id: 4,
    icon: reducs
  },
]

const tools = [
  {
    id: 1,
    icon: git
  },
  {
    id: 2,
    icon: github
  },
  {
    id: 3,
    icon: heroku
  },
  {
    id: 4,
    icon: netlify
  },
  {
    id: 5,
    icon: vercel
  },
  {
    id: 6,
    icon: npm
  },
  {
    id: 7,
    icon: json
  },
  {
    id: 8,
    icon: postman
  },
]


const Skills = () => {

  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>

      <SimpleGrid name="skills" mt={'7%'} gap='5%' columns={[1, 1, 2]}>
        <Box className={styles.front}>
          <Text fontSize={'xx-large'} fontWeight='semibold' color={'Highlight'} textAlign='center'  >FRONTEND SKILLS</Text>
          <SimpleGrid rowGap='20px' m='20px' gap={'-50px'} columns={[2, 2, 2, 3]}>
            {
              front.map((f) => {
                return (
                  <>
                  <Box data-aos="fade-up"
                    data-aos-duration="1500">
                    <Box p='9px' w={'120px'} h={'120px'} bg='black' m={'auto'} borderRadius='10px' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' >

                      <Image border='4px solid yellow' m={"auto"} w={'100px'} src={f.icon} alt="icons" borderRadius='50%' />
                    </Box>
                    </Box>
                  </>
                )
              })
            }

          </SimpleGrid>
        </Box>

        <Box className={styles.back}>
          <Text fontSize={'xx-large'} fontWeight='semibold' color={'Highlight'} textAlign='center'  >BACKEND SKILLS</Text>
          <SimpleGrid rowGap='20px' m='20px' gap={'-50px'} columns={[2, 2, 2, 3]}>
            {
              back.map((f) => {
                return (
                  <>
                  <Box data-aos="fade-up"
                    data-aos-duration="1500">
                    <Box p='6px' w={'120px'} h={'120px'} bg='black' m={'auto'} borderRadius='10px' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' >

                      <Image border='4px solid yellow' m={"auto"} w={'100px'} src={f.icon} alt="icons" borderRadius='50%' />
                    </Box>
                    </Box>
                  </>
                )
              })
            }

          </SimpleGrid>
        </Box>
      </SimpleGrid>

      {/* tools=============tooolss */}
      <Box mb={'7%'} className={styles.front}>
        <Text fontSize={'xx-large'} fontWeight='semibold' color={'Highlight'} textAlign='center'>TOOLS</Text>
        <SimpleGrid rowGap='20px' m='20px' gap={'-50px'} columns={[2, 2, 3, 4]}>
          {
            tools.map((f) => {
              return (
                <>
                  <Box data-aos="fade-up"
                    data-aos-duration="1500">
                    <Box p='9px' w={'120px'} h={'120px'} bg='rgb(2, 132, 199)' m={'auto'} borderRadius='10px' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' >

                      <Image border='4px solid black' m={"auto"} w={'100px'} src={f.icon} alt="icons" borderRadius='50%' />
                    </Box>
                  </Box>
                </>
              )
            })
          }

        </SimpleGrid>
      </Box>
    </>
  )
}

export default Skills