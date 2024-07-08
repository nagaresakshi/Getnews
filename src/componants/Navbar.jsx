import React, { Component } from 'react'
import {Link} from "react-router-dom";

const Navbar =()=> {
    return (
      
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className='container-fluid'>
            <Link className="navbar-brand fs-2 fw-bold" to="/">GetNEWS</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
                <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/general">General</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link>
                </li><li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
                </li>    
                
                
            </ul>
            <form className="d-flex mx-auto xs-hidden my-2 my-lg-0 ">
                <input className="form-control form-control-xs me-4 mr-xs-2 col-12 my-2 border border-success" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-success my-2 my-xs-0 col-4" type="submit">Search</button>
            </form>
            </div>
            </div>
      </nav>
    )
  
}

export default Navbar;