import "./contactus.css";
import emailjs from '@emailjs/browser';
import {Container, Row, Col} from "react-bootstrap";
import React, { useRef } from "react"



export default function ContactUs(){
    const form = useRef();

    function sendEmail(e){
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_0wx07io',form.current, 'yKOnJfUHKOQM3X8B_')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        e.target.reset();
        
    };

    return(
        <Container className = "contactUs">
                <Row className = "mb-5 mt-3">
                    <Col Lg = '8'>
                        <h1 className = "bgH display-4 mb-4">
                            Contact Us
                        </h1>
                    </Col>
                </Row>

                <Row className ="sec-sp">
                    <Col lg = '5'className = "mb-5">
                        <address> 
                            <strong> Email: simplysweetbysheen@gmail.com</strong>
                            <br />
                            <br />
                            <p>
                                <strong> Phone : (443) 370-6896  </strong>
                                
                            </p>

                        </address>
                        <p>
                            Please call the number above to place an order. If your call is not answered 
                            please leave a message and Shaheen will get back to you as soon as possible. 
                            Only email for questions and inquiries. 
                        </p>
                    </Col>
                    <Col lg = "7" className = "d0flex aligh-items-center">
                        <form ref = {form} className = "contact__form w=100"  onSubmit={sendEmail}>
                            <Row>
                                <Col lg = '6' className = "form-group">
                                    <input
                                        className = "form-control"
                                        id = "name"
                                        name = "name"
                                        placeholder = "Name"
                                        type = "text"
                                    />
                                </Col>

                                <Col lg = '6' className = "form-group">
                                    <input
                                        className = "form-control rounded-0"
                                        id = "email"
                                        name = "email"
                                        placeholder = "Email"
                                        type = "enail"
                                    />
                                </Col>
                            
                            </Row>
                            <br/>
                            <textarea className = "form-control rounded-0" id= "message"
                                            name = "message"
                                            placeholder = "Message"
                                            rows = '5'
                            ></textarea>

                            <br />
                            <Row>
                                <Col lg = '12' className = "form-group"> 
                                    <button className = "btn ac_btn" type = "submit"> Send</button>
                                
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            

        </Container>
       
    )
 }

