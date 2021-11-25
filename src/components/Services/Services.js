import React from 'react';
import './Services.css'

const Services = (props) => {


  const {img, instructor, teaching,  salary} = props.instructor;
    return ( 
     

        <div className="col card-style">
          <div className="card h-100 show-detail">
            <img width="65%" height="70%" src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
            
              <h3 className="card-title">{instructor}</h3>
              <p> <span className="fw-bolder"> Teaching: </span> <span className="fw-bold"> {teaching}</span> </p>
              <p> <span className="fw-bolder"> salary: </span> <span className="fw-bold"> {salary}</span> </p>
             
              
              
          
            </div>
          </div>
        </div>

      
      
    );
};

export default Services;