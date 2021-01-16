const { getRateLimit } = require('./queries')

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    rateLimit: async (parent, args, ctx) => {
      const res = { data, loading, networkStatus, stale } = await ctx.client.query({ query: getRateLimit })
      console.log('rateLimit', res)
      return data.rateLimit
    },
    dbTest: async (parent, args, ctx) => {
      try {
        const [data, count, command] = await ctx.sql`SELECT id FROM test`
        console.log('dbTest', data)
        return data
      } catch {
        return null;
      }
    }
  },
}

module.exports = {
  resolvers,
}
