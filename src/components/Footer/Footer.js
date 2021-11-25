import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-style">
           
           <Container>
  <Row>
    <Col xs>
        <div className="footer-styling">
            <h2 className="fw-bolder text-white">Courses</h2>
            <p className="fw-bold text-white">Acoustic Guitar</p>
            <p className="fw-bold text-white">Piano</p>
            <p className="fw-bold text-white">Drums</p>
            <p className="fw-bold text-white">Violin</p>
            <p className="fw-bold text-white">Base Guitar</p>
            <p className="fw-bold text-white">Classical Music</p>   
        </div>
    </Col>
    <Col xs={{ order: 12 }} className="footer-styling">
        <h2 className="fw-bolder text-white">Contact</h2>
        <p className="fw-bold text-white">1 888 123 4567</p>
        <p className="fw-bold text-white">info@Sparklemelody.com</p>
        <p className="fw-bold text-white">NY 11385</p>
    </Col>
    <Col xs={{ order: 1 }}>
        <h2 className="fw-bolder text-white">Socials</h2>
        <p className="fw-bold text-white">FaceBook</p>
        <p className="fw-bold text-white">Instagram</p>
        <p className="fw-bold text-white">TWitter</p>
        <p className="fw-bold text-white">Linkdin</p>
    </Col>
  </Row>

</Container>
<div className="mt-5">
<p className="text-white footer-bottom">Copyright <img width="1%" src="https://o.remove.bg/downloads/d1ae6f8a-5594-4bc7-86f0-45961b852fa7/001_2688246-5b916f32c9e77c0025c0cc9c-removebg-preview.png" alt="" /> 2021. All Rights Reserved</p>
</div>
     
        </div>
    );
};

export default Footer;