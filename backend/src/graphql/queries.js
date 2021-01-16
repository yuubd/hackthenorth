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

module.exports = {
  getRateLimit,
}
