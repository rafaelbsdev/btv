import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_PASSWORD } from '../GraphQL/Mutation';

function UpdatePassword() {
  const [username, setUsername] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

  if (error) {
    return (
      <h1>User Does Not Exist</h1>
    );
  }
  return (
    <div>
      <input type="text" placeholder="Username" onChange={(e) => { setUsername(e.target.value); }} />
      <input type="password" placeholder="Your Password" onChange={(e) => { setOldPassword(e.target.value); }} />
      <input type="password" placeholder="New Password" onChange={(e) => { setNewPassword(e.target.value); }} />

      <button onClick={() => { updatePassword({ variables: { username, oldPassword, newPassword } }); }}> Update Password </button>
    </div>
  );
}

export default UpdatePassword;
