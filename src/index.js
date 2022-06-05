const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const {buildSchema} = require("graphql");
const app = express();

const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

const root = {
    hello: () => {
        return "hey"
    }
}

app.use('/', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(3000)