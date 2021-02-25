import React  from 'react';
import {NavLink} from 'react-router-dom';

import {Navbar,Logo,Ul,Li,A} from './Navstyle.js';

const Nav=()=> {
  return (
    <Navbar>
            
            <div className="container">
                
                <Logo>
                    <h2 className="logo-text">Ultra Profile</h2>
                </Logo>
                
       
                
                <Ul className="ul-list">
                    <Li><NavLink exact to="/">Home</NavLink></Li>
                    <Li><A>Work</A></Li>
                    <Li><A>Portfolio</A></Li>
                    <Li><A>Resume</A></Li>
                    <Li><A>About</A></Li>
                    <Li><NavLink to="/contact">Contact</NavLink></Li>
                </Ul>
                
            </div>
            
        </Navbar>   
  );
}

export default Nav;
