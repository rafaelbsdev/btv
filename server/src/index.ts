import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { createConnection } from 'typeorm';
import { schema } from './Schema';
import { Users } from './Entities/Users';

require('dotenv').config({
  path: `${__dirname}/.env`,
});

const main = async () => {
  await createConnection({
    host: 'localhost',
    type: 'postgres',
    database: 'postgres',
    username: 'postgres',
    password: process.env.SENHA_PG,
    logging: true,
    synchronize: false,
    entities: [Users],
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
  }));

  app.listen(4000, () => {
    console.log('Server on port 4000');
  });
};

main().catch((err) => {
  console.log(err);
});
