import React from 'react';
import {NavLink} from 'react-router-dom';
const Cards = (props) =>{
  return(
    <>
              <div className="col-md-4 col-10 mx-auto">
              
              <div className="card">
                 <img src={props.imgsrc} className="card-img-top" alt="..." id="image"/>
               <div className="card-body text-center">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                   <p className="card-text">{props.text}</p>
                   <NavLink to="" className="btn-order-here ">Order Here</NavLink>
               </div>
              </div>

              </div>
            
    </>
  );
};

export default Cards;