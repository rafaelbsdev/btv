"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageType = void 0;
const graphql_1 = require("graphql");
exports.MessageType = new graphql_1.GraphQLObjectType({
    name: 'Message',
    fields: () => ({
        success: { type: graphql_1.GraphQLBoolean },
        message: { type: graphql_1.GraphQLString },
    }),
});
