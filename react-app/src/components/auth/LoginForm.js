import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

const LoginForm = ({ setShowModal }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/home' />;
  }

  return (
    <form className='modal-container' onSubmit={onLogin}>
      <div>
        {errors.map((error, ind) => (
          <div className='errors' key={ind}>
            {error}
          </div>
        ))}
      </div>
      <div>
        <label className='modal-input-title-label' htmlFor='email'>
          Email
        </label>
        <input
          className='modal-input-title'
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label className='modal-input-title-label' htmlFor='password'>
          Password
        </label>
        <input
          className='modal-input-title'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        <button type='submit' className='login-btn modal-btn modal-submit-btn'>
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
