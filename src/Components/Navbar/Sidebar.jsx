import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    Box,
    Flex,
    Text,
    IconButton,
    LinkBox,
    color,
} from '@chakra-ui/react'
import React from 'react'
import { HamburgerIcon, EmailIcon } from '@chakra-ui/icons'
import { Link } from 'react-scroll'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from "./Side.module.css";





export default function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button size={"sm"} m='auto' right={3} onClick={onOpen}>
                <HamburgerIcon boxSize={4} />
            </Button>
            <Drawer
                width="100%"
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}


            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader backgroundColor='black' textDecoration='underline'>
                        <Flex gap={2}>
                            <span>
                                <Text color={'teal'}>WEB</Text>
                            </span>

                            <Flex>
                                <span>
                                    <Text color={'yellow'}>DEV</Text>
                                </span>
                                <span>
                                    <Text color={'blue'}>ELOPER</Text>
                                </span>
                            </Flex>
                        </Flex>
                    </DrawerHeader>

                    <DrawerBody bg='blackAlpha.200'>
                        <Box>
                            <Box ><Text className={styles.text}  cursor='pointer' fontSize={'large'} fontWeight='semibold' mt={4}  textColor={'teal'}  ><Link onClick={onClose} to='Navbar' spy={true} smooth={true}>HOME</Link></Text></Box>
                            <Box ><Text className={styles.text} cursor='pointer' fontSize={'large'} fontWeight='semibold' mt={4}  textColor={'teal'}  ><Link onClick={onClose} to='tech-stack' spy={true} smooth={true}>TECH-STACK</Link></Text></Box>
                            <Box ><Text className={styles.text} cursor='pointer' fontSize={'large'} fontWeight='semibold' mt={4}  textColor={'teal'}  ><Link onClick={onClose} to='skills' spy={true} smooth={true}>SKILLS</Link></Text></Box>
                            <Box ><Text className={styles.text} cursor='pointer' fontSize={'large'} fontWeight='semibold' mt={4}  textColor={'teal'}  ><Link onClick={onClose} to='projects' spy={true} smooth={true}>PROJECT-BLOGS</Link></Text></Box>
                            <Box ><Text className={styles.text} cursor='pointer' fontSize={'large'} fontWeight='semibold' mt={4}  textColor={'teal'}  ><Link onClick={onClose} to='contact' spy={true} smooth={true}>CONTACT ME</Link></Text></Box>

                        </Box>
                    </DrawerBody>

                    <DrawerFooter>
                        <Flex columnGap={7}>
                            <a href='https://github.com/pravhatray'>
                                <IconButton size='lg' colorScheme='teal' icon={<FaGithub />} />
                            </a>

                            <a href='https://www.linkedin.com/in/pravhat-ray-842851236/'><IconButton size='lg' colorScheme='teal' icon={<FaLinkedin />} /></a>
                            <a href='https://www.linkedin.com/in/pravhat-ray-842851236/'><IconButton size='lg' colorScheme='teal' icon={<FaFacebook />} /></a>
                            <Button size={'lg'} w={3.5} bgColor="teal">
                                <a href='pravhatray@gmail.com'><EmailIcon color='white' /></a>

                            </Button>


                        </Flex>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}