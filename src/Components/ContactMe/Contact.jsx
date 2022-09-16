
import React, {  useRef, useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import { Box, Button, Input, SimpleGrid, Textarea } from "@chakra-ui/react";

const Contact = () => {

  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_n0iwy9m",
        "template_68x8x5v",
        form.current,
        "CfVPNUitRuynd2t3g"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
        <form ref={form} onSubmit={sendEmail}>
          <Input type="text" name="user_name" className="user"  placeholder="Name"/>
          <Input type="email" name="user_email" className="user" placeholder="Email"/>
          <Textarea name="message" className="user" placeholder="Message"/>
          <Button type="submit" value="Send" className={styles.button}>Send Email</Button>
          <span>{done && "Thanks for Contacting me"}</span>
          <Box
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></Box>
        </form>
      </Box>
    </SimpleGrid>
  );
};

export default Contact;
