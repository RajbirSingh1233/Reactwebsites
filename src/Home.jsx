import React from 'react';
import Pizza from './images/pizza.png';
import {NavLink} from 'react-router-dom';

const Home = () =>{
  return(
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1> Place Your Order at <strong className="brand-name">Foodies!!</strong> </h1>
                <h2 className="my-3">
                  We provide the best food and services.
                </h2>
                <div className="mt-3">
                  <NavLink to="/login" className="btn-order-now"> Order Now</NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={Pizza} className="img-fluid animated" alt="home img" />
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