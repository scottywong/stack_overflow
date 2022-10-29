import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

const DemoLogin = () => {
  const [errors, setErrors] = useState([]);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  if (user) {
    return <Redirect to='/home' />;
  }

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login('demo@aa.io', 'password'));
    if (data) {
      setErrors(data);
    }
  };

  return (
    <form onSubmit={onLogin}>
      <button type="submit">Demo User</button>
    </form>
  );
};

export default DemoLogin;
