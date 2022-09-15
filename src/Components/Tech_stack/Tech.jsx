import React, { useEffect, useState } from 'react'
import styles from './Tech.module.css'
import {motion} from "framer-motion"
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import { SimpleGrid} from "@chakra-ui/react"

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
      "title":"JavaScript",
      "icon":"https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"
  },
  {
      "id":6,
      "title":"HTML",
      "icon":"https://i1.wp.com/www.pensemosweb.com/wp-content/uploads/2018/01/HTMLCover.jpg?fit=1240%2C700&ssl=1"
  },
  {
      "id":7,
      "title":"CSS",
      "icon":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU3mtb///8qltWiyukfk9MmldQwmNXj7vhTpdqsz+qJvOMYkdPe7vpOpt09nNdZrOGOw+l3tODx+f/L5Phlrt+93POz1vDY6/lwsd/q9PzI3/GbyetuteV7tuCn0fDQ5/e21e3B2u+QweUKVQEKAAAMpElEQVR4nO2d6ZaqOhCFFUMcEEXbdjg2re37P+QN2gopEkh2BYfb7l9nsU4rn4SaUkl6/f+7eo++gc71Jnx9vQlfX2/C19eb8PX1Jgyi5fTj+L3P8u1qXmi1zbP99/FjurzHl3dMOP3cL9IoEXEcR7KqSF0RSZQu9p/Tbm+hO8LhOkuFUGC9JilUIdJsPezsProh3K0XUsTNbBpnLORivevkXjogPGSzJJbueL+QMk5m2SH87YQm/JhEIvKEK6X+dvIR+I6CEk4zKbwfHn2UQmZBbU9AwnUqWsyKI2Qk0nW42wpFuMuECIH3CylEFsruhCHcfCX4y2dWlHxtgtxbCMLDPODjKyXFPIRp5RNuuuH7ZeQ/Ry7hcNUZ34VxxY12eITLSdIl35kxmfACdBbhOg5tX0yKYpbvYBBOU4/IkyMZp4wYACfMOh+gFcYkuzvhZhbfja9QPEOtKkiYJXflK4Q+Rohwl973AV4Up1AghxB+duoC7ZLi8z6EE/EQvkJicgfC5UNG6FVx6u3+fQmnzAyXKyl9XaMn4efjRuhVvi+jH+H3/Z1EXcl3d4QP8IIm+XlGH8L88UP0IpF3Q/j1SCOqK/7qgvCJAL0QnQmfCtAH0ZXwyQA9EB0J82cDVIiO5saNMHsWK1qVcHMaToRP4ejrcnP9LoRPEKqZ5RTAORBOnxVQITqE4e2Ey3tUDFFF7clUO2H62HSpWTLlE04wPxFVdbkZ7ZK0/C9fxa1ZfxshaGVW44rWZ8B0Xb02OiNql1bQN7VamxbCHQYoT9qnzBSOHGmX8uLSTLt0wl4H0VKBayEEX0Kpjx0D4aJOOAG/q+VVbCbMwGDtnoS9uDm2aSTcoLHMXQl7SWPBv5FwBn6lA6HhPYQJe/rneBCiY/RGeNwuCuWXi1fnfFJX8/MLHl2NxOB2CVLjOG0ghMfojXAvLo2Il2vyirgSv9dkvKOXMDWN0wZCRjBzJdS9uLzxXK/L+DpLv2UloE321E44ZnynhTCqI4owiPHYn3DJyShuo1SP2uLkxnO5Vly6pge8MoKwhuBWwgknpfgl/Dc4a3y+NBsX/75+/Ki4dr60v15acUL8yBqf2giHrKTwzt6ikLD13dgIWT/onT3+5StXfoQbXl7/AMKesHgMC+Gc2Qf7AEI59yE8MEszMt8NS+0uhNql7ZlQu5QziwnC3MloJmQ+wnMLbEXS/RLnO80P0UjIfAsfJfObaCT8eubik13SOJVhItw9Z4m7XYmpoGEizJ65QtqkyJRFmQhf8y0sJNwI1/4hcNSNvO/D1GtrIEy9P1gOupG/wTPkiXVCYCImMQyOEPK3eIapmjohYGeSbhaDLv0JDbamTgjUS6yZC09ABidlO+EHYEnFv04I/yG3UlvcVyNEIvz4pxPCH6CuIWu5fo0QWWAXDeinBNEAiDxk1EYI5U1kqimUoMmoWg5FCaGITfp00rkLShhr1pQSQlMV1hoJT1itiE5iEEJsRlQ2To3AmkGEdMaUEAIxaaG4E0LwXkhsSggXWO7bTdiGpaly0UgITgDZa+oMgfMKNKzRCdFKt61WyRJaLSIxpE4IvobdhG1I0FaIvIg6YYY2Cxw7IDyibRK6R9QJ/ZPfizoJ25Cg7Sw9DdYJ0QoNCduW+ek0aVCua3HRlgx1sIOIVms0QrjPkoZtiQQkfvQPgav8eqKvEX6i07C0oA61ANCYGZ5aiLVWN41wj458GrZBgQOtFGBBm1K0r35Mj31jl7vTbw76qWjFGi7b6lGNRoia0lrYBhl6GvrhcwuaMdUI8Wo+CeihcISMA7Dxs5CW51cJgerd7e70sA35JPouM6b4tOpmlZDRlB8TX4bUkPRp8P4/vL9GcxdVwg/8M2nYNvK3WbRQgAZtxd1US4q9MJ9Jw7ZFQvU7lR31LHUSKbb6R8BBG/m9q4TfOCEtUy53u92yUJ/q0/h4pZjRzjRGa0ZcXS5UJYQdfj2xtmh3ik07vkTJtt5HgTtn3eVXCdHcqdCI3qBB/1amDV9kHJ9MJYIRfjNa/lQlZDS0OFTbxjNTP4kUqSW3hIM2kghUCbeMZ2iaX65oOEkMw1NGycJa/2DMtcuq0aoScrr1GqttPyPj8BRy0FDBYjSEaI6nSsjphLKvXFkOpHF4JqOfpl+F0/6pJXPBCC2jbZMnhtksNTwnLbOqnL6sTgjNU4jH1Gxdeva27KuQycNuCesW0eL8ZLJyqT0yAqxuCPW8WumwtWyHuXerjzOCNjshx5bSsO1k2c1NjuYjo1Iyy8rpp7XaUo4/lK5xs63SFpNBEOxmAsU0tbDN+zWia0IYQZs9puHEpXTGx9sUUmPc49yMLS5l5Ba1sM2744FWSzkNktbcgpEf1jq/vCsipCONUTNqyA85LojWc4e+d0gmWVlrdqw5PqNOw6+2kVHOaqa31mlYG2BQS+H7WaTZgRO02WttvLFPrL1wmm+6/TlNoTmrH+31UkbNux62mSMXGsiUiMSfsuy6tebNmLcwNQU6qPQpNCZiLYKyz1swylu1W3RSab3pD8QK2uxzT5yhQYvyTirfttogD5bnhJkDPn8uQFjG5xExVJzXsGEOmOUukM6vshmBOhuOWW+Yx2cFg7RhfzO9yl6RKe0JmbxiOa6GXgyWMaXT8OXCQvt2AKVpo0Ef57du6qfh5E80Obj5Omnf1aCsKpBJfM4i1saeKLSvrRB9kyp3byUc2f4PJ2hr7GvjDA5qDXMHwnJuggTeY4YtbexNRPtLz4TEo5V20l4PL0MaEpZyJvoa+0s5UQ3t/Cp9nb37tLSYJF7gTIM19wgzXkQ6D1/GK7SN4abSJ9CYj1HYbOnzZjSx0D1iygZY66KhcsExDUsZe+O09OrjW0Opu9Q/qZI3jAaGcbo8LsoBQ19ihtdqWW/BWeVMTGbFLstIiMWx+tsOxyNtypQaYjykaV0zw3C1JGwjgVdx+N/p8kIeTjN6QhsZyJzurLZ1T9Datd/PJmFb7S6lFGI+yGPD+XqkFR73y+1r1xjJtVPnlzT/gqRairbpO60/RNaQXkRNpo89JGEpHrQ5rCHFwxra+eXj04iVgicPXdYB49Y0IjOAC/f9WCQhhNv0ndZyB2vY30x6Todanq2s/qeB2vQthHAabFhnORyvTJ1Clb+pecqz4KDNaU8FODa1dH79KPdgHPjF+bjGaAfv+HLcFwOu1lirbZvBiD5K9fDk5MfWtICaAse9TWBb09TbpqJQcX0rledPVuOmjiHwN3benwbdY6htnaWK1tSjLKM3q9AMx3mPIXSfKIc94HfjvG5XagLNufs+Uej0ZLB1lmDQ5rHXF9gdFWydJTbd7rNfG5hDBVtniQVtXnvuYQ8x2PYYUNDmt28i9iY6Nuy3C1vc57f3JRQ3BdseI+iXh9yDNtj2GEjQ5r0HLbSPcEvDvrOAiMN/H2Foz4ZQ22MAhMBe0EhHi2wIpl21/JkAVQZkP2+o7lwkROkJP9X+cEpV5Ap8L7QnO7qvvsqLVObgf5D2VGXLTjUBg8B99TlnI6jU3SXEvmp3zAVK18PPRmBNYmhF7mb9OydVnK+Cz7fgnP9wgVSprqVOcf0Glf0bSuB+YpxRwhinJaV6LbfGhH643sIvXlWcc2ZCHdglY1qUKXyC4A3N24ezzgrizJiS+ygKa/uLHznsR5BPMIt53lPQkwHPfmSA+wSjuGd2weeu2WSZe4LFP3ftD5yd9wfOP/z/n2H5B84h/QNnyf6B84D/wJnOf+Bc7qdDDH+2+pMhugN6ED4TogegD2E/fxaLKnx21/Yh7GfP4RcTNzeBED6H63dz9CDhMwRwTqEaTtifBsvNMUnpW4n1Jewv00ea1Dj1njXwJlRZ/+NGqgAWqgKE6mV8zEiVvq8gTNjfPWSkxqn7NAGX8CGe0c8Lsgn7m9l9H2M8Qze2RwmLx3i/t1GiD5BF2J+mYcry7Xxx6j8dGYKw6LW9R6UxMvXF3omwv5x0PlRlMuG1BvAI+/3hqlPnKMWKe+IZl1BZ1XlnjFLM+UeD8An7/UM3jIoP7+ooFYJQPccvywZ7uKLkK8zRLmEIVSCX8Y8sLiWFyKAQzaBQhErrNMzUp4xEyvIPugISqhggk9zGCqk+IWP497qCEip9TCLzChknqb+d1JbXMRWaUOmQzYBGhKKVYZaFMJ5EHRAq7dYLr2aSoh1lsQ5lW3R1Q1houM5SIeIW4yOjWIg0W3dzVmuh7gjPmn7uF2mUiDhWqFVF6opIonSx/wxqV+rqmPCi5fTj+L3P8u1qXmi1zbP99/Fj2s0xwkR3IXyo3oSvrzfh6+tN+Pp6E76+3oSvr/8AbT7RdQXNFCEAAAAASUVORK5CYII="
  },
  {
      "id":8,
      "title":"Chakra UI",
      "icon":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1jnd81gUztN2chGQPyjaS4mjjV8PF6m_iw&usqp=CAU"
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
    
        <SimpleGrid name='tech-stack' columns={[2,2,3,4]} className={styles.cards}>
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