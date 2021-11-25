import React from 'react';
import img from '../../Images/music44.png'
import img1 from '../../Images/musicschool1.png'
import './About.css'

const About = () => {
    return (
        <div className="about-styling">
          
            <div className="about-us py-5">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="my-5 py-5 container">
                    <p className="text-danger">About Us</p>
                    <h4 className="fw-bolder fs-3">A leader in educating artists since 2008</h4>
                    <p className="text-dark-50 fw-bold">Sparkle Melody School offers nationally accredited undergraduate, graduate, and post-baccalaureate programs to more than 2,800 students from all over the world.

Our school has an educational philosophy built upon an integrative approach to music, giving students exceptional opportunities to develop their creative and critical abilities, while working with leading faculty who include many of the famed artists.

</p>
                </div>
            </div>
            
        
            <div className="about-all py-5">
                
                <div className="py-5 container">
                    <h4 className="fw-bolder fs-3">The highest caliber of artistic education</h4>
                    <p className="text-dark-50 fw-bold">The Sparkle Melody educates students in the language and process of making art in an environment where anyone who wishes to pursue an art education can realize his or her full potential.

We fulfill this mission by offering high quality and accessible education and instruction in painting, drawing, sketch, sculpture and digital.

</p>
                </div>
                <div className="my-2 py-5">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;