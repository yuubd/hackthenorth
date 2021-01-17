const { contributionResolver } = require('./contributionResolver');
const {
  getRateLimit,
  getGithubUser,
  getPullRequestContributionByRepositoryByUser,
  getCommitContributionByRepositoryByUser,
  getIssueContributionByRepositoryByUser
} = require('./queries');
const { camelCase } = require('camel-case');


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    rateLimit: async (parent, args, ctx) => {
      try {
        const res = { data, loading, networkStatus, stale } = await ctx.client.query({ query: getRateLimit })
        return data.rateLimit
      } catch (e) {
        console.log("ERROR:", e);
        return null;
      }
    },
    dbTest: async (parent, args, ctx) => {
      try {
        const [data, count, command] = await ctx.sql`SELECT id FROM test`
        return data
      } catch (e) {
        console.log("ERROR:", e);
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
      } catch (e) {
        console.log("ERROR:", e);
        return null;
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
    },
    mostCritProjects: async (parent, args, ctx) => {
      try {
        const { language } = args;
        let res = language === 'all' ?
          await ctx.sql`
            SELECT * FROM open_source_projects
            ORDER BY criticality_score DESC
            LIMIT 50
            ` :
          await ctx.sql`
            SELECT * FROM open_source_projects WHERE language=${language}
            ORDER BY criticality_score DESC
            LIMIT 50
            `
        res = res.map((obj) => {
          let newObj = {}
          Object.keys(obj).map(key => newObj[camelCase(key)] = obj[key]);
          return newObj;
        });
        
        return res;
      } catch (e) {
        console.log("ERROR:", e);
        return null;
      }
    }
  },
}

module.exports = {
  resolvers,
}
