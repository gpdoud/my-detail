import React, { useState, useEffect } from 'react';

const uri = "http://localhost:5000/api/users/1";

const callUserGet = async () => {
  const res = await fetch(uri);
  const user = await res.json();
  console.debug("User:", user);
  return user;
}

function App() {
  const [ user, setUser ] = useState({});

  useEffect(() => {
    callUserGet()
      .then(res => setUser(res))
    },[]);
  
  return (
    <table className='table table-sm'>
      <tbody>
        <tr><td>Id</td><td>{user.id}</td></tr>
        <tr><td>Username</td><td>{user.username}</td></tr>
        <tr><td>Firstname</td><td>{user.firstname}</td></tr>
        <tr><td>Lastname</td><td>{user.lastname}</td></tr>
        <tr><td>Phone</td><td>{user.phone}</td></tr>
        <tr><td>Email</td><td>{user.email}</td></tr>
        <tr><td>Reviewer</td><td>{user.isReviewer ? "Yes" : "No"}</td></tr>
        <tr><td>Admin</td><td>{user.isAdmin ? "Yes" : "No"}</td></tr>
      </tbody>
    </table>
  );
}

export default App;
