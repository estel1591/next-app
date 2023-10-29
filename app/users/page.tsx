import React from 'react';

interface User { // create interface for fetch data
  id: number;
  name: string;
}

const UsersPage = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/users'); // make request
  const users: User[] = await result.json(); // get data

  return (
    <>
      <h1>Users</h1>
      <ul>
        {/* display data */}
        {users.map(user=><li key={user.id}>{user.name}</li>)}
      </ul>
    </>

  )
}

export default UsersPage