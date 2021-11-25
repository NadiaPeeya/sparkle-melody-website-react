import React from 'react';
import './ShowDetail.css'

const ShowCourses = (props) => {
           const {img, name, time, Days, price} = props.course;
    return (
    

        <div className="col card-style">
          <div className="card h-100 show-detail">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <h5>Time: {time}</h5>
              <h5>Days: {Days}</h5>
              <h5>Fees: ${price}</h5>
          
            </div>
          </div>
        </div>
      
      
     
   
      
    );
};

export default ShowCourses;