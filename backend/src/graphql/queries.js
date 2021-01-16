// gql queries to GitHub graphql API
const { gql } = require('apollo-server')

const getRateLimit = gql `{
  rateLimit {
    cost
    limit
    nodeCount
    remaining
    resetAt
    used
  }
}`

const getGithubUser = gql `
  query getGithubUser($login: String!){
    user(login: $login) {
      id
      login
      name
      location
      createdAt
      updatedAt
      avatarUrl(size: 128)
      url
      bio
      company
      createdAt
      twitterUsername
      websiteUrl
      email
      followers(first: 1) {
        totalCount
      }
      following(first: 1) {
        totalCount
      }
      repositories(first: 1) {
        totalCount
      }
      gists(first: 1) {
        totalCount
      }
      starredRepositories(first: 1) {
        totalCount
      }
    }
  }
`

const getPullRequestContributionByRepositoryByUser = gql `
  query getPullRequestContributionByRepositoryByUser($login: String!) {
    user(login: $login) {
      id
      login
      name
      bio
      location
      email
      company
      twitterUsername
      followers(first: 1) {
        totalCount
      }
      following(first: 1) {
        totalCount
      }
      repositories(first: 1) {
        totalCount
      }
      gists(first: 1) {
        totalCount
      }
      starredRepositories(first: 1) {
        totalCount
      }
      url
      avatarUrl
      websiteUrl
      createdAt
      updatedAt
      contributionsCollection {
        pullRequestContributionsByRepository {
          repository {
            url
            name
            nameWithOwner
          }
          contributions(last: 100) {
            totalCount
            nodes {
              occurredAt
            }
          }
        }
      }
    }
  }
`

module.exports = {
  getRateLimit,
  getGithubUser,
  getPullRequestContributionByRepositoryByUser,
}
