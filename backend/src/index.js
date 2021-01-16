

const { ApolloClient, InMemoryCache, HttpLink } = require('apollo-boost');
const { ApolloServer } = require('apollo-server');
const fetch = require('node-fetch');
const postgres = require('postgres')

const { typeDefs, resolvers } = require('./graphql/index')

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  context: (req) => {
    const client = new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: 'https://api.github.com/graphql',
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_PAT}`,
        },
        fetch,
      }),
    })
    const sql = postgres({ host: process.env.DB_HOST, database: 'postgres', username: 'postgres', password: 'postgres' })
    return {
      client,
      sql,
    }
  }
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
