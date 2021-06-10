/**
 * FIXME: an error keeps occuring with the following message - DONE:
 * {
    "message": "Unexpected token < in JSON at position 0",
    "stack": "SyntaxError: Unexpected token < in JSON at position 0"
    }
    
    View - DEBUG:
 */

import express from "express";
import schema from "./schema";
import resolvers from "./resolvers";

import { graphqlHTTP } from "express-graphql";

const app = express();

app.get("/", (req, res) => {
  res.send("Up and running with GraphQL crash course - practie version");
});

const root = resolvers;

/* FIXME: problem part
app.get(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    rootValue: root,
  })
);
*/

// DEBUG: need to use app.use()
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(8082, () => console.log("Running at port 8082"));
