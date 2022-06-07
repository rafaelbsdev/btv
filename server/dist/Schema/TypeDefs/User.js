"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserType = void 0;
const graphql_1 = require("graphql");
exports.UserType = new graphql_1.GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        username: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
    }),
});
