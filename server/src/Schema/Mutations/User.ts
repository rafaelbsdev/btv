//* MUTATION USER
import { GraphQLString, GraphQLID } from 'graphql';
import { UserType } from '../TypeDefs/User';
import { MessageType } from '../TypeDefs/Messages';
import { Users } from '../../Entities/Users';

export const CREATE_USER_MUTATION = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { name, username, password } = args;
    await Users.insert({
      name, username, password,
    });
    return args;
  },
};

export const DELETE_USER = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const { id } = args;
    await Users.delete(id);

    return { success: true, message: 'User Deleted.' };
  },
};

export const UPDATE_PASSWORD = {
  type: MessageType,
  args: {
    username: { type: GraphQLString },
    oldPassword: { type: GraphQLString },
    newPassword: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { username, oldPassword, newPassword } = args;
    const user = await Users.findOne({ where: { username } });

    if (!user) {
      throw new Error('Incorrect Username');
    }
    const userPassword = user?.password;

    if (oldPassword === userPassword) {
      await Users.update(
        { username },
        { password: newPassword },
      );

      return { success: true, message: 'Password Updated' };
    }
    throw new Error('Wrong Password.');
  },
};
