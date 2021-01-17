const { camelCase } = require('camel-case');
const { contributionResolver } = require('./contributionResolver');
const {
  getRateLimit,
  getGithubUser,
  getPullRequestContributionByRepositoryByUser,
  getCommitContributionByRepositoryByUser,
  getIssueContributionByRepositoryByUser,
  getTopIssues,
} = require('./queries');


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    rateLimit: async (parent, args, ctx) => {
      try {
        const res = { data, loading, networkStatus, stale } = await ctx.client.query({ query: getRateLimit })
        return data.rateLimit
      } catch (e) {
        console.error("rateLimit", e);
        return null;
      }
    },
    dbTest: async (parent, args, ctx) => {
      try {
        const [data, count, command] = await ctx.sql`SELECT id FROM test`
        return data
      } catch (e) {
        console.error("dbTest", e);
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
        console.error("user", e);
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
        const data = language === 'all' ?
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
        return data.map((obj) => updateCamelCaseKeys(obj))
      } catch (e) {
        console.error("mostCritProjects", e)
        return null
      }
    },
    topIssues: async (parent, args, ctx) => {
      try {
        let { label, state } = args
        const query = `label:"${label.toLowerCase()}" state:${state.toLowerCase()}`
        // gets top 100 best match issues by label and state
        const { data } = await ctx.client.query({
          query: getTopIssues,
          variables: { query },
        })
        const res = [];
        const re = new RegExp('^[a-zA-Z0-9. -_?\r\n]*$')
        for (const node of data.search?.nodes) {
          if (node.__typename !== "Issue") continue
          if (!re.test(node.title)) continue
          if (!re.test(node.body)) continue

          // modify node.labels.nodes
          if (node.labels.nodes)
            node.labels = node.labels.nodes
          res.push(node)
        }
        return res;
      } catch (e) {
        console.error('topIssues', e)
        return null;
      }
    },
    projectDetail: async (parent, args, ctx) => {
      try {
        const { fullName } = args;
        const data = await ctx.sql`
          SELECT * FROM open_source_projects WHERE full_name=${fullName}
          LIMIT 1
          `
          const res = updateCamelCaseKeys(data[0]);
          return res;
      } catch (e) {
        console.log("ERROR:", e);
        return null;
      }
    }
  },
}

function updateCamelCaseKeys(obj) {
  let newObj = {}
  Object.keys(obj).map(key => newObj[camelCase(key)] = obj[key]);
  return newObj;
}

module.exports = {
  resolvers,
}
