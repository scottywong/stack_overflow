
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LoginFormModal from '../auth/LoginFormModal';
import SignUpFormModal from '../auth/SignUpFormModal';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css';

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;

  if (sessionUser){
    sessionLinks = (
      <nav className='navBar'>
        <ul>
          <li>
            <NavLink
              to='/home'
              exact={true}
              activeClassName='active'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to='/profile' exact={true} activeClassName='active'>
              Profile
            </NavLink>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </nav>
    );
  } else {
    sessionLinks = (
      <nav className='navBar'>
        <ul>
          <li>
            <LoginFormModal />
          </li>
          <li>
            <SignUpFormModal />
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav className='navBar'>
        {sessionLinks}  
    </nav>
  );
}

export default NavBar;
