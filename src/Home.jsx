import React from 'react';
import Home1 from './images/home1.jpeg';
import {NavLink} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

const Home = () =>{
  return(
    <>
      <section id="header" className="d-flex align-items-center">
      <Carousel fade className="carousel ">
          <Carousel.Item >
           <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="First slide"
            />
          </Carousel.Item>
      <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/239581/pexels-photo-239581.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Second slide"
            />
      </Carousel.Item>
      <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Third slide"
          />
      </Carousel.Item>
    </Carousel>
        <div className="container-fluid">
        
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1> Place Your Order at <strong className="brand-name">Foodiess!!</strong> </h1>
                <h2 className="my-3">
                  We provide the best food and services.
                </h2>

                <div className="mt-3">
                  <NavLink to="/login" className="btn-order-now"> Order Now</NavLink>
                </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>

        

      </section>

      
    </>
  );
};

export default Home;