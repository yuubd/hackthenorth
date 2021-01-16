const { getRateLimit, getGithubUser } = require('./queries')

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    rateLimit: async (parent, args, ctx) => {
      try {
        const res = { data, loading, networkStatus, stale } = await ctx.client.query({ query: getRateLimit })
        console.log('rateLimit', res)
        return data.rateLimit
      } catch {
        return null
      }
    },
    dbTest: async (parent, args, ctx) => {
      try {
        const [data, count, command] = await ctx.sql`SELECT id FROM test`
        console.log('dbTest', data)
        return data
      } catch {
        return null;
      }
    },
    user: async (parent, args, ctx) => {
      try {
        const { login } = args
        const res = { data } = await ctx.client.query({
          query: getGithubUser,
          variables: { login },
        })
        console.log('user', res)
        return data.user
      } catch {
        return null
      }
    },
  },
}

module.exports = {
  resolvers,
}
