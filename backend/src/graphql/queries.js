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
      isHireable
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

module.exports = {
  getRateLimit,
  getGithubUser,
}
