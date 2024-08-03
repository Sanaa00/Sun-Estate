import { useState } from 'react';
import './navbar.scss';
function Navbar() {


  const [open,setOpen]=useState(false)
  return (
    <nav>
      <div className="left">
        <a href="" className="logo">
          <img src="" />
          <span>Sun Estate</span>
        </a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>
      <div className="right">
        <a href="">Sigin</a>{' '}
        <a href="" className="register">
          Sig up
        </a>
        <div className="menuItem">
          <img src="" alt="" onClick={}/>
        </div>
        <div className="menu">
          {' '}
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">signin</a>
          <a href="">sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
