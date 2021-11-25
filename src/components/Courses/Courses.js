import React, { useEffect, useState } from 'react';

import './Courses.css';
import ShowCourses from './../ShowCourse/ShowCourses';
import Services from '../Services/Services';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructor] = useState([])

useEffect(()=>{
  fetch('./courses.JSON')
  .then(res => res.json())
  .then(data => setCourses(data))
},[])

useEffect(() => {
  fetch('./instructors.JSON')
  .then(res => res.json())
  .then(data => setInstructor(data))
}, [])

    return (
        <div className="more-items">
          <br />
          <br/>
          <h1 className="text-dark fw-bolder">Full Time Courses</h1>
           
           <div className="row row-cols-3 row-cols-md-3 g-5 card-detail my-4 mx-auto">
           {
             courses.map(course => <ShowCourses key={course.id} course={course}></ShowCourses> )
           }
           </div>
           <br />
           <br />
           <h1 className="mt-5 mb-0">Our Legend Teachers</h1>
           
        <div className="row row-cols-3 row-cols-md-3 g-5 card-detail my-4 mx-auto">
        {
              instructors.map(instructor => <Services key={instructor.id} instructor={instructor}></Services>)
           }
        </div>
       
        
        </div>

    );
};

export default Courses;