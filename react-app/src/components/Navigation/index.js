
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LoginFormModal from '../auth/LoginFormModal';
import SignUpFormModal from '../auth/SignUpFormModal';
import LogoutButton from '../auth/LogoutButton';
import logo from '../../assets/logo-stackoverflow.png';
import { useHistory } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

  const user = useSelector(state => state.session.user)
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    user ? setIsLoggedIn(true) : setIsLoggedIn(false)
  }, [user]);

  return (
    <>    
    <div className='navBar-top'/>
    <div className='navBar-container'>
      <a href="/home" className='logo'>
          <img className='logo' src={logo}/>
      </a>
      <nav className='navBar-ul-container'>
        <ul className='navBar-ul'>

        {!isLoggedIn && 
            <li>
              <button onClick={()=> history.push('/login')} exact={true} activeClassName='active'>
                Demo User
              </button>
            </li>
          }
          {!isLoggedIn && 
            <li>
                <LoginFormModal />
            </li>
          }
          {!isLoggedIn && 
                <li>
                <SignUpFormModal />
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
