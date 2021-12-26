import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Signup = () => {
    return (
        <>
        <Navbar/>
            <div className="container">
        <div className="d-flex justify-content-center">
            <div className="col-md-7 mt-4 mb-3 p-3 shadow-lg">
                <form>
                    <div className="col-12 mb-3">
                        <label htmlFor="firstname">FirstName</label>
                        <input type="text" name="fname" id="firstname" placeholder="FirstName" className="form-control"/>
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="lastname">LastName</label>
                        <input type="text" name="lname" id="lastname" placeholder="LastName" className="form-control"/>
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="example@gmail.com" className="form-control"/>
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="pass" id="password" placeholder="***********" className="form-control"/>
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input type="password" name="cpass" id="cpassword" placeholder="***********" className="form-control"/>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-primary form-control">Signup</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <Footer/>
        </>
    )
}

export default Signup
