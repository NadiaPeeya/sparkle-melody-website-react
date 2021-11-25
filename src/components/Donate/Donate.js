import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

import './Donate.css';

const Donate = () => {
    return (
       <div>
<div className="donation container my-5 py-5">

<div>
    <img width="70%" src="https://images.squarespace-cdn.com/content/v1/5ebd82c7763b7035243da170/1624726138322-PF0UGB9K88A83PKWHAJS/child+playing+piano.jpg?format=1500w" alt="" />
</div>

<div>
    <h1 className="fw-bolder">Sponsor A Child’s Music Education </h1>
    <p classname="fw-bold">We need generous support from donors like you to sustain our music education outreach program to the local community. A generous donation at any sponsorship level will help us to reach new audiences and children that wouldn’t otherwise be able to afford to learn to play a musical instrument. Consider how your donations can permanently change the lives of child in our local community.</p>
</div>


</div>

   <div>
     

       <Container className="my-4 py-4 style-donation">
       <h1 className="mt-3 donation-text">Donate</h1>
  <Row>
    <Col xs className="my-5 py-3">
        <h3>Sponsor a Child</h3>
        <p className="text-dark-50">Sponsoring a child’s monthly music lesson costs means that a child that can’t afford music lessons gets to take weekly private music lessons, on any instrument at our academy, free of charge. This gift directly benefits children in the Bloomington, Indiana community who otherwise couldn’t afford music lessons.</p>
        <p className="fw-bolder">Sponsorship Level: $100</p>
    </Col>
    <Col className="my-5 py-3" xs={{ order: 12 }}>
    <h3>Academy Gear Upkeep</h3>
        <p className="text-dark-50">Help us keep our gear new and clean with a one time donation of any amount. These donations help us keep our pianos in tune, purchase books and supplies for our libraries and teaching studios, and help us to purchase new gear and furniture as we expand our reach.</p>
        <p className="fw-bolder">Sponsorship Level: $200</p>
    </Col>
  </Row>
  <Row>
    <Col className="my-5 py-3" xs>
    <h3>Games and Prizes.</h3>
        <p className="text-dark-50">Help us encourage our students to practice by donating new or lightly used games and prizes that we can give away as rewards to our students who practice their instrument every day!</p>
        <p className="fw-bolder">Sponsorship Level: New or Lightly Used Games Prizes</p>
    </Col>
    <Col className="my-5 py-3" xs={{ order: 12 }}>
    <h3>New Building Purchase.</h3>
        <p className="text-dark-50">Helping us in our fundraising efforts for a new building will help us expand our reach to the Bloomington, Indiana community. This will allow us to expand our summer camp offerings and programs as well as allow us to teach group lessons to children of all ages. With a new building, we will also be able to offer our semester recitals on our very own campus!</p>
        <p className="fw-bolder">Sponsorship Level: $1000+</p>
    </Col>
  </Row>
</Container>
   </div>



   <div className="container donation-styling donation-img">
       <h1 className="mt-5 pt-5 text-white fw-bolder">Make a donation</h1>
       <p className=" text-white fw-bolder container">100% of donations to the Sparkle Melody Academy of Music go towards supporting music education locally in Bloomington, Indiana. Thank you for your continued support and remember, 

“It’s never too late to learn to play a musical instrument!”</p>
<Button variant="outline-light" size="lg">Donate</Button>
   </div>

       </div>
         
       
    );
};

export default Donate;