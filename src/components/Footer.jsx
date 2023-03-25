import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/img/logo.svg';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/%D8%B9%D9%85%D8%B1-%D8%A7%D9%84%D8%AD%D9%81%D9%86%D8%A7%D9%88%D9%8A-962269251"><img src={navIcon1} alt="" /></a>
            <a href="https://www.facebook.com/profile.php?id=100010377122051&mibextid=ZbWKwL"><img src={navIcon2} alt="" /></a>
            <a href="https://www.instagram.com/omar._1/"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved by Omar Abdelaziz El Hifnawy</p>
            <span>Thank you for attention</span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
