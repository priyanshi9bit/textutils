import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <Link className="navbar-brand" to="/About">About</Link>
                <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`} >
                    <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                        <label className="form-check-label"  For="flexSwitchCheckDefault">Dark Mode</label>                       
                </div>     
                    <form className="d-flex">
                        {/* <div className="bg-primary rounded mx-2 my-1" style={{height:'30px',width:'30px',cursor:"pointer"}} onClick={()=>{props.toggleMode('primary')}} ></div> */}
                        {/* <div className="bg-danger rounded mx-2 my-1" style={{height:'30px',width:'30px',cursor:"pointer"}} onClick={()=>{props.toggleMode('danger')}} ></div> */}
                        {/* <div className="bg-success rounded mx-2 my-1" style={{height:'30px',width:'30px',cursor:"pointer"}} onClick={()=>{props.toggleMode('success')}} ></div> */}
                        {/* <div className="bg-warning rounded mx-2 my-1" style={{height:'30px',width:'30px',cursor:"pointer"}} onClick={()=>{props.toggleMode('warning')}} ></div> */}
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success"  type="submit" >Search</button>
                    </form>
                </div>
        </nav>
            )
}
            Navbar.propTypes = {
                title: propTypes.string,
}