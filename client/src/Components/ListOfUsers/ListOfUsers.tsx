import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_USERS } from '../../GraphQL/Queries';
import { DELETE_USER } from '../../GraphQL/Mutation';
import styles from './listOfUsers.module.css';

function ListOfUser() {
  const { data } = useQuery(GET_ALL_USERS);

  const [deleteUser, { error }] = useMutation(DELETE_USER);

  return (
    <div className={styles.container}>
      {data && (data.getAllUsers.map((user: any) => (
        <div className={styles.conteudo}>
          {user.name}
          { ' ' }
          /
          { ' ' }
          {user.username}
          <button className={styles.btn} onClick={() => deleteUser({ variables: { id: user.id } })}>❌</button>
        </div>
      )))}

    </div>
  );
}

export default ListOfUser;
