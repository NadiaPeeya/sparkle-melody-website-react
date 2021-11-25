import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Welcome.css';
import logo from '../../Images/graduatetimg.png';
import logo2 from '../../Images/trophy.png';
import logo3 from '../../Images/pie-chart.png';

const Welcome = () => {
    return (
        <div>
            <h1 className="melody-text mb-5">Welcome To  <span className="sparkle">  Sparkle</span><span className="melody"> Melody  </span>  School !!</h1> 
            <Container>
  <Row className="mb-4">
  <Col className="school" xs={{ order: 'first' }}>
        <img className="my-4" width="35%" src={logo} alt="" />
        <h2>Program</h2>
        <p className="fw-bold">The musical profession is continuously evolving as technical logitech...</p> 

    </Col>
    
    <Col className="school" xs>
        <img className="my-4" width="30%" src={logo3} alt="" />
        <h2>Affordability</h2>
        <p className="fw-bold">This School will make you more affortable and going to make you creative about music</p>
    </Col>
 
    <Col className="school" xs={{ order: 'last' }}>
        <img className="my-4" width="30%" src={logo2} alt="" />
        <h2>Certification</h2>
        <p className="fw-bold">Sparkle Melody School will provide you Certification. And provide you the level of certification also you gain your trophy by working hard!</p>
    </Col>
  </Row>
</Container>

        </div>
    );
};

export default Welcome;