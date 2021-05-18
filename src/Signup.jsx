import React from 'react';
import { NavLink } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Signup = () =>{

    const Created=()=>{
        alert("Account created Successfully");
        <NavLink to="/login"/>
    }

    return(
        <>
        <section class="login py-5 bg-light ">
            <div class="container">
              <div class="row g-0" id="signin">
                <div class="col-lg-5">
                    <img src="https://images.all-free-download.com/images/graphicthumb/food_picture_01_hd_pictures_167558.jpg" 
                         class="img-fluid" alt="" id="img1" />
                    <img src="https://images.all-free-download.com/images/graphicthumb/food_picture_03_hd_pictures_167556.jpg"
                         class="img-fluid" alt="" id="img2" />
                </div>
                <div class="col-lg-7 text-center py-3">
                    <h1 class="animate__animated animate__flipInX animate__infinite">New User</h1>

                    <form>

                    <div class="form-row">
                            <div class="offset-1 col-lg-10">
                                <input type="text" class="inp px-3" placeholder="First Name"/>
                            </div>
                        </div>

                        <div class="form-row py-3">
                            <div class="offset-1 col-lg-10">
                                <input type="text" class="inp px-3" placeholder="Last Name"/>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="offset-1 col-lg-10">
                                <input type="text" class="inp px-3" placeholder="UserName"/>
                            </div>
                        </div>

                        <div class="form-row py-3">
                            <div class="offset-1 col-lg-10">
                                <input type="number" class="inp px-3" placeholder="Pincode"/>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="offset-1 col-lg-10">
                                <input type="password" class="inp px-3" placeholder="Password"/>
                            </div>
                        </div>
                        

                        <div class="form-row pt-5">
                            <div class="offset-1 col-lg-10">
                                <button className="btn1" onClick={Created}>Create a new account</button>
                            </div>
                        </div>
                    </form>
                    {/*<p class="pt-3">Or login with :</p>*/}
                    {/*<button className="icon1">
                        <FacebookIcon />
                    </button>
                    <button className="icon2">
                        <TwitterIcon />
                    </button>*/}
                </div>
              </div>
            </div>
          </section>
        </>
    )    
};

export default Signup;