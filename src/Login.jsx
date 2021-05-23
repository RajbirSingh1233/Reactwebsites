import React from 'react';
import {NavLink} from 'react-router-dom';

const Login = () =>{
    return(
        <>
          <section class="login py-5 bg-light ">
            <div class="container">
              <div class="row g-0" id="signin">
                <div class="col-lg-5">
                    <img src="https://images.all-free-download.com/images/graphicthumb/food_picture_01_hd_pictures_167558.jpg" 
                         class="img-fluid" alt="" />
                </div>
                <div class="col-lg-7 text-center py-3">
                    <h1 class="animate__animated animate__flipInX animate__infinite">Welcome Back</h1>

                    <form>
                        <div class="form-row">
                            <div class="offset-1 col-lg-10">
                                <input type="text" class="inp px-3" placeholder="UserName" required/>
                            </div>
                        </div>

                        <div class="form-row py-3">
                            <div class="offset-1 col-lg-10">
                                <input type="password" class="inp px-3" placeholder="Password" required/>
                            </div>
                        </div>

                        <div class="form-row py-3">
                            <div class="offset-1 col-lg-10">
                                <button className="btn1">SignIn</button>
                            </div>
                        </div>
                    </form>
                    <p>New User?<NavLink to="/signup"> Create a new account</NavLink></p>
                </div>
              </div>
            </div>
          </section>
        </>
    );
};

export default Login;