import { useState , useEffect } from 'react';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import React from 'react'
import 'animate.css';
import { Container , Row , Col} from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg"
export default function Banner() {
    const [loopNum , setLoopNum] = useState(0)
    const [isDeleting , setIsDeleting] = useState(false)
    const toRotate = ["UI/UX Designer","Front End" , "Back End" , "Full Stack Web Develper"]
    const [text , setText ] = useState('')
    const [delta , setDelta] = useState(300 - Math.random()*100 )
    const period = 2000
    useEffect(()=>{
        let ticker = setInterval (()=>{
            tick();
        },delta)
        return (()=>{clearInterval(ticker)})
    }, [text])
    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring ( 0 , text.length - 1) : fullText.substring ( 0 , text.length + 1)
        setText(updatedText)

        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }
    return (
        <div>
            <section className='banner' id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl ={7}>
                            <span className='tagline'>Welcome All In My Protfolio</span>
                            <h1>{`Hi! I'm Omar AbdelAziz El Hifnawy `}<span className='wrap'>{text}</span></h1>
                            <p>Hello Everyone.I have 2 years of Experience in Web Development.</p>
                            <button onClick={()=> console.log("connect")}>let's connect <ArrowRightCircle size={25}/></button>
                        </Col>
                        <Col xs={12} md={6} xl ={5}>
                            <img src={headerImg} alt=" Header Img " />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
