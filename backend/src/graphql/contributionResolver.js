const { getPullRequestContributionByRepositoryByUser } = require("./queries")


/**
 *
 * @param {*} login user login id
 * @param {*} ctx request context
 * @param {*} type contribution type
 * @param {*} key contributionCollection type-based key. ie. 'pullRequestContributionsByRepository'
 * @param {*} query gql query must contain user.contributionsCollection[key]
 */
const contributionResolver = async (login, ctx, type, key, query) => {
    const { data: { user } } = await ctx.client.query({
      query,
      variables: { login },
    })
    const byRepos = user.contributionsCollection[key]
    const userContributions = []
    for (const { repository: { url, name, nameWithOwner }, contributions } of byRepos) {
      for (const { occurredAt } of contributions.nodes) {
        userContributions.push({
          repoUrl: url,
          repoName: name,
          repoNameWithOwner: nameWithOwner,
          occurredAt,
        })
      }
    }
    userContributions.sort((a, b) => new Date(a.occurredAt) - new Date(b.occurredAt))
  return {
    type,
    user: user,
    contributions: userContributions,
  }
}

module.exports = {
  contributionResolver,
}
