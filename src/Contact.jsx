import React, { useState } from 'react';

const Contact = () =>{

  const[data, setData] = useState({
    fullname:'',
    phone:'',
    email:'',
    msg:'',
  });

  const InputEvent = (event) =>{
    const {name , value} = event.target;
    setData((preVal)=>{
      return{
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit= () =>{
    alert("success");
  }

  return(
    <>
      <div className="my-5">
        <h1 className="text-center contact">Contact Us</h1>
      </div>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">

            <form onSubmit={formSubmit}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="FullName" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your name" required/>
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
              <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Phone number" />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="emailaddress" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" required/>
            </div>

            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Reviews</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={InputEvent} rows="3" required></textarea>
            </div>
            </form>

            <div class="col-12 text-center">
    <button class="btn btn-outline-primary mb-3" type="submit" onClick={formSubmit}>Submit form</button>
  </div>


            </div>
          </div>
      </div>
    </>
  );
};

export default Contact;