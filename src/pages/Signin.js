import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        <>  
        <Navbar/>
        <div className="container" style={{marginBottom: '200px'}}>
        <div className="d-flex justify-content-center">
            <div className="col-md-7 mt-4 mb-3 p-3 shadow-lg">
                <form>
                   
                    <div className="col-12 mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="example@gmail.com" className="form-control"/>
                    </div>
                    <div className="col-12 mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="pass" id="password" placeholder="***********" className="form-control"/>
                    </div>
                    
                    <div className="col-4 mb-3">
                        <button className="btn btn-primary form-control">Signin</button>
                    </div>
                    <div className="col-4 offset-md-8">
                       <Link to="forgetpassword.html" className="text-decoration-none text-secondary">Forget Password?</Link>
                    </div>

                </form>
            </div>
        </div>
    </div>
    <Footer/>
    </>
        
    )
}

export default Signin
