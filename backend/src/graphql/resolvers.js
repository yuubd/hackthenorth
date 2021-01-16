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
    mostCritProjects: async (parent, args, ctx) => {
      try {
        const { language } = args;
        const where = language === 'all' ? '' : `WHERE language=${language}`;
        const res = { data } = await ctx.sql`
          SELECT * FROM open_source_projects ${where}
          ORDER BY criticality_score DESC
          LIMIT 50
        `
        return res;
      } catch {
        return null;
      }
    }
  },
}

module.exports = {
  resolvers,
}
