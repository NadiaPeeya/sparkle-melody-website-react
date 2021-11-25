import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Instruments.css';
import logo from '../../Images/piano5jpg.jpg';
import img from '../../Images/guitar12.png';
import img1 from '../../Images/drum1.jpg';
import img2 from '../../Images/violin11.jpg';


const Instruments = () => {

    return (
    

<div className="middle-items">
            <h1 className=""> <span className="courses">Our Courses</span> || <span className="melody">Instruments</span> </h1>
            <Container className="my-5 py-5">
  <Row>
    <Col xs>
    <div className="instruments">    
        <h3 className="my-2 instruments-name">Guitar</h3>
            <img className="img-style" width="100%" src={img} alt="" />
            
        </div>
    </Col>
    <Col xs={{ order: 12 }}>
        <div className="instruments">
        <h3 className="my-2 instruments-name">Piano</h3>
            <img className="img-style" width="75%" src={logo} alt="" />
            
        </div>
    </Col>
    <Col xs={{ order: 1 }}>
    <div className="instruments">
             <h3 className="my-2 instruments-name">drums</h3>
            <img className="img-style" width="75%" src={img1} alt="" />
            
        </div>
    </Col>
    <Col xs={{ order: 1 }}>
    <div className="instruments">
    <h3 className="my-2 instruments-name">Violin</h3>
            <img className="img-style" width="75%" src={img2} alt="" />
            
        </div>
    </Col>
  </Row>
</Container>
        </div>
    );
};

export default Instruments;