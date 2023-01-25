import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function UsersList() {
  const [users, setUsers] = useState([]);

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
      <div className='ql-list' id="userList">
        <div className='qli-container' id="qCont">
      {/* <li key={user.id}> */}
        {/* <NavLink className="qli-link" to={`/users/${user.id}`}> */}
          <h3 className='qli-title'>{user.username}</h3>
          {/* </NavLink> */}
      {/* </li> */}
          <p>{user.email}</p>
      
      </div>
      </div>
    );
  });

  return (
    <div className="homepage-container">
      <div className='ql-container'>
        <div className='ql-header' id="qHeader" >
              {/* <div className='question-nav-header'> */}
      <h1 id="qHead">User List</h1>
      {/* </div> */}
      </div>
      <ul>{userComponents}</ul>
    </div>
    </div>
  );
}

export default UsersList;
