import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () =>{
  return(
    <>
      <div className="card" id="card1">
        <div className="card-front"></div>
        <div className="card-back">
          <h2>Rajbir<br /><span>Senior Designer</span></h2>
          <div>
            <NavLink to="#" className="fa fa-facebook"></NavLink>
            <NavLink to="#" className="fa fa-twitter"></NavLink>
            <NavLink to="#" className="fa fa-google-plus"></NavLink>
            <NavLink to="#" className="fa fa-linkedin"></NavLink>
            <NavLink to="#" className="fa fa-instagram"></NavLink>
            
          </div>

        </div>
      </div>
    </>
  );
};

export default About;