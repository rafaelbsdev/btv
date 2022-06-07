"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_PASSWORD = exports.DELETE_USER = exports.CREATE_USER_MUTATION = void 0;
const graphql_1 = require("graphql");
const User_1 = require("../TypeDefs/User");
const Messages_1 = require("../TypeDefs/Messages");
const Users_1 = require("../../Entities/Users");
//* MUTATION USER
exports.CREATE_USER_MUTATION = {
    type: User_1.UserType,
    args: {
        name: { type: graphql_1.GraphQLString },
        username: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, username, password } = args;
            yield Users_1.Users.insert({
                name, username, password,
            });
            return args;
        });
    },
};
exports.DELETE_USER = {
    type: Messages_1.MessageType,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = args;
            yield Users_1.Users.delete(id);
            return { success: true, message: 'User Deleted.' };
        });
    },
};
exports.UPDATE_PASSWORD = {
    type: Messages_1.MessageType,
    args: {
        username: { type: graphql_1.GraphQLString },
        oldPassword: { type: graphql_1.GraphQLString },
        newPassword: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, oldPassword, newPassword } = args;
            const user = yield Users_1.Users.findOne({ where: { username } });
            if (!user) {
                throw new Error('Incorrect Username');
            }
            const userPassword = user === null || user === void 0 ? void 0 : user.password;
            if (oldPassword === userPassword) {
                yield Users_1.Users.update({ username }, { password: newPassword });
                return { success: true, message: 'Password Updated' };
            }
            throw new Error('Wrong Password.');
        });
    },
};
