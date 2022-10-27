
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import logo from '../../assets/logo-stackoverflow.png';
import './NavBar.css';

const NavBar = () => {

  const user = useSelector(state => state.session.user)
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  useEffect(() => {
    user ? setIsLoggedIn(true) : setIsLoggedIn(false)
  }, [user]);

  return (
    <>    
    <div className='navBar-top'/>
  
    <div className='navBar-container'>
      <a href="/" className='logo'>
          <img className='logo' src={logo}/>
      </a>
      <nav className='navBar'>
        <ul className='navBar-ul'>
          <li>
            <NavLink to='/' exact={true} activeClassName='active'>
              Home
            </NavLink>
          </li>
          {!isLoggedIn && 
            <li>
              <NavLink to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink>
            </li>
          }
          {!isLoggedIn && 
            <li>
              <NavLink to='/sign-up' exact={true} activeClassName='active' >
                Sign Up
              </NavLink>
            </li>
            }
          <li>
            <NavLink to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink>
          </li>
          <li>
            <a href='/profile' exact={true} activeClassName='active'>
              <i className="fa-solid fa-user">
              </i>
            </a>
          </li>
          {isLoggedIn && 
              <li>
                <LogoutButton />
              </li>
            }
        </ul>
      </nav>
    </div>
    </>

  );
}

export default NavBar;
