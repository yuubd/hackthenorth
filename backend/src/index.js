const { ApolloClient, InMemoryCache, HttpLink, IntrospectionFragmentMatcher } = require('apollo-boost');
const { ApolloServer } = require('apollo-server');
const fetch = require('node-fetch');
const postgres = require('postgres')

const { typeDefs, resolvers } = require('./graphql/index')
const schema = require('./graphql/github.schema.json')

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: schema
})

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  context: (req) => {
    const client = new ApolloClient({
      cache: new InMemoryCache({ fragmentMatcher }),
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
server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
