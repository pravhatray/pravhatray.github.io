
import React, {  useState,useEffect } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import { Box, Button, Hide, Image, Input, SimpleGrid, Text, Textarea } from "@chakra-ui/react";
import bg from "./img/bg1.gif"
const Contact = () => {

  const [values, setValues] = useState({
    fullName: '',
    email: '',
  
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_n0iwy9m', 'template_68x8x5v', values, 'Y4tJDYFr57fRjw8o3')
      .then(response => {
        console.log('SUCCESS!', response);
        setValues({
          fullName: '',
          email: '',
         
          message: ''
        });
        setStatus('SUCCESS');
      }, error => {
        console.log('FAILED...', error);
      });
  }
 
  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
  return (
    <>
    <SimpleGrid columns={[1,1,1,2]}  mb={1} gap={4} className={styles.contact_form} id="contact">
      {/* left side copy and paste from work section */}
         <Hide below="md" >
        <Box   >
            <Image src={bg} borderTopRightRadius="10px"  borderBottomRightRadius="10px" alt="bg" />

        </Box>
        </Hide>
     
      {/* right side form */}
      <Box  width="100%" m="auto" >
      {status && renderAlert()}
        <form  onSubmit={handleSubmit} >
          
           
                    <Text fontSize={"xl"} fontWeight="600">Let's Colaborate</Text>
                <br/>
             
              

          <Input value={values.fullName} classname={styles.user}     onChange={handleChange} label="Full Name" name="fullName" type="text" placeholder="Employer or Company name"/>
          <br/>
          <br/>
             <Input value={values.email} classname={styles.user}     onChange={handleChange} label="E-Mail" name="email" type="email" placeholder="abc@email.com"/>
            <br/>
            <br/>
          <Textarea value={values.message}  classname={styles.user}    onChange={handleChange} label="Your message here" name="message" placeholder="Your message please"/>
            <br/>
            <br/>
          <Button type="submit" value="Send" className={styles.button}>Send Email</Button>
         
          <Box
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></Box>
        </form>
      </Box>
    </SimpleGrid>


{/* <Box  h='1100px'  className={styles.bg}>
</Box> */}
</>
  );
};
const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p>Your message send successfully</p>
  </div>
)
export default Contact;
