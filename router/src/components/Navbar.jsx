import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:'flex',
                justifyContent:'space-between',
                backgroundColor:"white",
                color:"black",
                padding:"5px"

    }}>
      <Link to={"/"} style={{textDecoration:'none'}}>
      <h1 style={{cursor:'pointer'}} >Kalvium
        <img src="https://kalvium.community/images/sidebar-2d-logo.svg" alt="" />
      </h1>
      
      </Link>

      <div style={{display:'flex',gap:"10px"}}>
        <Link to={"/about"}>
        <h1 style={{cursor:'pointer'}}>ABOUT</h1>
        </Link>
        <Link to={"/contact"}>
        <h1 style={{cursor:'pointer'}}>CONTACT</h1>
        </Link>

      </div>
    </div>
  )
}

export default Navbar