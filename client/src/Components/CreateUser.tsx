import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../GraphQL/Mutation';

function CreateUser() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [createUser, { error }] = useMutation(CREATE_USER);
  if (error) {
    throw new Error('Cannot Create User');
  }

  return (
    <div className="createUser">
      <input type="text" placeholder="Name" onChange={(e) => { setName(e.target.value); }} />
      <input type="text" placeholder="Username" onChange={(e) => { setUsername(e.target.value); }} />
      <input type="text" placeholder="Password" onChange={(e) => { setPassword(e.target.value); }} />
      <button onClick={() => { createUser({ variables: { name, username, password } }); }}>
        Create User
      </button>
    </div>
  );
}

export default CreateUser;
