const {
  getRateLimit,
  getGithubUser,
  getPullRequestContributionByRepositoryByUser,
} = require('./queries')

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    rateLimit: async (parent, args, ctx) => {
      try {
        const res = { data, loading, networkStatus, stale } = await ctx.client.query({ query: getRateLimit })
        return data.rateLimit
      } catch {
        return null
      }
    },
    dbTest: async (parent, args, ctx) => {
      try {
        const [data, count, command] = await ctx.sql`SELECT id FROM test`
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
        return data.user
      } catch {
        return null
      }
    },
    pullRequestsContributionByUser: async (parent, args, ctx) => {
      const res = []
      const usersArr = args.users.split(',').map(userStr => userStr.trim())

      for (const login of usersArr) {
        const { data: { user } } = await ctx.client.query({
          query: getPullRequestContributionByRepositoryByUser,
          variables: { login }
        })
        const prsByRepos = user.contributionsCollection.pullRequestContributionsByRepository

        const userContributions = []
        for (const { repository: { url, name, nameWithOwner }, contributions } of prsByRepos) {
          for (const { occurredAt } of contributions.nodes) {
            userContributions.push({
              repoUrl: url,
              repoName: name,
              repoNameWithOwner: nameWithOwner,
              occurredAt,
            })
          }
        }
        res.push({
          type: "PULL_REQUEST",
          user: user,
          contributions: userContributions,
        })
      }

      return res;
    }
  },
}

module.exports = {
  resolvers,
}
