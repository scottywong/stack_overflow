import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './UsersList.css';

function UsersList() {
  const [users, setUsers] = useState([]);
  console.log('USERS = ', users)
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const userComponents = users.map((user) => {
    return (
      <li className='user-list-item' key={user.id}>
        <NavLink className='user-list-link' to={`/users/${user.id}`}>{user.username}</NavLink>
      </li>
    );
  });

  return (
    <>
      <h1>Users: </h1>
      <ul>{userComponents}</ul>
    </>
  );
}

export default UsersList;
