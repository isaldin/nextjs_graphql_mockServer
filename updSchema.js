import fs from 'fs';
import path from 'path';
import { introspectionQuery } from 'graphql/utilities';
import fetch from 'isomorphic-fetch';

// Save JSON of full schema introspection for Babel Relay Plugin to use

const graphqlEndpoint = 'http://;-):60088/graphql';

const run = () => {
  console.log('Start GraphQL schema update.');
  if (!graphqlEndpoint) {
    console.error(`Please check 'graphqlEndpoint' var in ${__filename}`);
    process.exit(1);
  }
  fetch(graphqlEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: introspectionQuery,
    }),
  })
    .then(result => {
      console.log('Result status from graphql: ', result.statusText);
      return result.json();
    })
    .then(result => {
      if (result.errors) {
        console.error(
          'ERROR introspecting schema: ',
          JSON.stringify(result.errors, null, 2)
        );
      } else {
        fs.writeFileSync(
          path.join(__dirname, './schema/schema.json'),
          JSON.stringify(result, null, 2)
        );
        console.log('GraphQL schema updated.');
      }
    })
    .catch((err) => {
      console.error(`Error in ${__filename}`);
      console.error(err);
      process.exit(1);
    });
};

run();
