const { gql } = require('apollo-server')

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
   type RateLimit {
    cost: Int!
    limit: Int!
    nodeCount: Int!
    remaining: Int!
    resetAt: String!
    used: Int!
  }

  type DBTest {
    id: ID!
  }

  type Followers {
    totalCount: Int
  }

  type Following {
    totalCount: Int
  }

  type GithubUser {
    id: ID!
    login: String!
    name: String
    bio: String
    location: String
    email: String
    company: String
    hireable: Boolean
    twitterUsername: String
    followers: Followers!
    following: Following!
    url: String! # html_url
    avatarUrl: String!
    websiteUrl: String # blog
    createdAt: String!
    updatedAt: String!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    rateLimit: RateLimit,
    dbTest: DBTest,
    user(login: String!): GithubUser,
  }
`

module.exports = {
  typeDefs,
}
