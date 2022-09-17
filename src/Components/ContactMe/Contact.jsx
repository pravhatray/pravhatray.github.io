
import React, {  useState,useEffect } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import { Box, Button, Input, SimpleGrid, Textarea } from "@chakra-ui/react";

const Contact = () => {

  const [values, setValues] = useState({
    fullName: '',
    email: '',
  
    message: ''
  });
  const [status, setStatus] = useState('');



  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .send(
  //       "service_n0iwy9m",
  //       "template_68x8x5v",
  //      values,
  //       "CfVPNUitRuynd2t3g"
  //     )
  //     .then(
  //       (result) => {
  //         console.log("Success!!",result);
  //         setValues({
  //           fullName: '',
  //           email: '',
  //           role: '',
  //           message: ''
  //         });
  //         setStatus('SUCCESS');
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
 
 
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
    <SimpleGrid columns={[1,1,2]}  gap={4} className={styles.contact_form} id="contact">
      {/* left side copy and paste from work section */}
  
        <Box className={styles.awesome}>
        
          <span style={{color:  'teal'}}>Get in Touch</span>
          <span>Contact me</span>
          <Box
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></Box>
        </Box>
     
      {/* right side form */}
      <Box className={styles.c_right}>
      {status && renderAlert()}
        <form  onSubmit={handleSubmit}>
          <Input value={values.fullName} classname={styles.user}     onChange={handleChange} label="Full Name" name="fullName" type="text" placeholder="Employer or Company name"/>
          <Input value={values.email} classname={styles.user}     onChange={handleChange} label="E-Mail" name="email" type="email" placeholder="gmail@example.com"/>
          <Textarea value={values.message}  classname={styles.user}    onChange={handleChange} label="Your message here" name="message" placeholder="Your message"/>
          <Button type="submit" value="Send" className={styles.button}>Send Email</Button>
         
          <Box
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></Box>
        </form>
      </Box>
    </SimpleGrid>
  );
};
const renderAlert = () => (
  <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
    <p>Your message send successfully</p>
  </div>
)
export default Contact;
