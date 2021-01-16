const { contributionResolver } = require('./contributionResolver')
const {
  getRateLimit,
  getGithubUser,
  getPullRequestContributionByRepositoryByUser,
  getCommitContributionByRepositoryByUser,
  getIssueContributionByRepositoryByUser
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
      let res = []
      const logins = args.logins.split(',').map(userStr => userStr.trim())

      for (const login of logins) {
        const contributionByUser = await contributionResolver(
          login, ctx, "PULL_REQUESTS", "pullRequestContributionsByRepository", getPullRequestContributionByRepositoryByUser)
        res = res.concat(contributionByUser)
      }

      return res
    },
    commitsContributionByUser: async (parent, args, ctx) => {
      let res = []
      const logins = args.logins.split(',').map(userStr => userStr.trim())

      for (const login of logins) {
        const contributionByUser = await contributionResolver(
          login, ctx, "COMMITS", "commitContributionsByRepository", getCommitContributionByRepositoryByUser)
        res = res.concat(contributionByUser)
      }

      return res
    },
    issuesContributionByUser: async (parent, args, ctx) => {
      let res = []
      const logins = args.logins.split(',').map(userStr => userStr.trim())

      for (const login of logins) {
        const contributionByUser = await contributionResolver(
          login, ctx, "ISSUES", "issueContributionsByRepository", getIssueContributionByRepositoryByUser)
        res = res.concat(contributionByUser)
      }

      return res
    }
  },
}

module.exports = {
  resolvers,
}
