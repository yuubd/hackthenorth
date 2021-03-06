const { gql } = require('apollo-server')

const typeDefs = gql`
  # enums
  enum LabelType {
    GOOD_FIRST_ISSUE
    HELP_WANTED
  }

  enum StateType {
    OPEN
    CLOSED
  }

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
    twitterUsername: String
    followers: Followers!
    following: Following!
    url: String! # html_url
    avatarUrl: String!
    websiteUrl: String # blog
    createdAt: String!
    updatedAt: String!
  }

  type Contribution {
    repoUrl: String
    repoName: String
    repoNameWithOwner: String
    occurredAt: String
  }

  type ContributionsByUser {
    type: String
    user: GithubUser
    contributions: [Contribution]!
  }

  type Repository {
    url: String!
    name: String!
    nameWithOwner: String!
    description: String
    stargazerCount: Int
    createdAt: String
    updatedAt: String
    primaryLanguage: Language
  }

  type Label {
    id: ID!
    name: String!
    color: String!
    isDefault: Boolean!
  }

  type Language {
    id: ID!
    name: String!
    color: String
  }

  type Issue {
    id: ID!
    title: String!
    url: String!
    body: String
    createdAt: String
    updatedAt: String
    repository: Repository!
    labels: [Label]!
  }

  type Project {
    projectId: ID!
    name: String!
    url: String!
    fullName: String!
    language: String!
    createdSince: Int
    updatedSince: Int
    contributorCount: Int
    orgCount: Int
    commitFrequency: Float
    recentReleasesCount: Int
    updatedIssuesCount: Int
    closedIssuesCount: Int
    commentFrequency: Float
    dependentsCount: Int,
    criticalityScore: Float!
  }

  type RecentStatistics {
    since: String!
    repositoryCount: Int!
    userCount: Int!
    pullRequestCount: Int!
    issueCount: Int!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    rateLimit: RateLimit
    dbTest: DBTest
    user(login: String!): GithubUser
    pullRequestsContributionByUser(logins: String!): [ContributionsByUser]!
    commitsContributionByUser(logins: String!): [ContributionsByUser]!
    issuesContributionByUser(logins: String!): [ContributionsByUser]!
    mostCritProjects(language: String = "all"): [Project]
    topIssues(label: LabelType = GOOD_FIRST_ISSUE, state: StateType = OPEN): [Issue]
    projectDetail(fullName: String!): Project
    recentStatistics: RecentStatistics
    recentRepositories: [Repository]
  }
`

module.exports = {
  typeDefs,
}
