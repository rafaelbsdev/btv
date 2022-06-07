import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_USERS } from '../GraphQL/Queries';
import { DELETE_USER } from '../GraphQL/Mutation';

function ListOfUser() {
  const { data } = useQuery(GET_ALL_USERS);

  const [deleteUser, { error }] = useMutation(DELETE_USER);

  return (
    <div>
      {data && (data.getAllUsers.map((user: any) => (
        <div>
          {user.name}

          /

          {user.username}
          <button onClick={() => deleteUser({ variables: { id: user.id } })}>DeleteUser</button>
        </div>
      )))}

    </div>
  );
}

export default ListOfUser;
