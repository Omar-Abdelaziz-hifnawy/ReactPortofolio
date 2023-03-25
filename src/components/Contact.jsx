import {React, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import imgContact from '../assets/img/contact-img.svg'
import 'animate.css';

export default function Content() {
    const formInitialDitails = {
        firstName : "",
        lastName : "",
        email : "",
        phone : "",
        massage : ""
    }
    const [formDitails , setFormDitails] = useState(formInitialDitails)
    const [buttonText , setButtonText] = useState('send')
    const [status , setStatus] = useState({})
    const onFormUpdate = (category , value ) => {
        setFormDitails ({
            ...formDitails,
            [category] : value
        })
    }
    const handleSubmit = () => {
        setButtonText("Sending...");
        setFormDitails(formInitialDitails);
    };
    
    return (
    <section className="contact" id='connects'>
        <Container >
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={imgContact} alt="Contact" />
                </Col>
                <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6} className="px-1">
                                <input type="text" value={formDitails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate("firstName" , e.target.value)}/>
                            </Col>
                            <Col md={6} className="px-1">
                                <input type="text" value={formDitails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate("lastName" , e.target.value)}/>
                            </Col>
                            <Col md={6} className="px-1">
                                <input type="email" value={formDitails.email} placeholder="Email Address" onChange={(e) => onFormUpdate("email" , e.target.value)}/>
                            </Col>
                            <Col md={6} className="px-1">
                                <input type="tel" value={formDitails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate("phone" , e.target.value)}/>
                            </Col>
                            <Col md={12} className="px-1">
                                <textarea row="6" value={formDitails.massage} placeholder="Massage" onChange={(e) => onFormUpdate("massage" , e.target.value)}/>
                                <button type='submit'><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.massage &&
                                <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.massage}</p>
                                </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    </section>
    )
}
