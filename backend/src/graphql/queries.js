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

const getCommitContributionByRepositoryByUser = gql `
  query getCommitContributionByRepositoryByUser($login: String!) {
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
        commitContributionsByRepository {
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

const getIssueContributionByRepositoryByUser = gql `
  query getIssueContributionByRepositoryByUser($login: String!) {
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
        issueContributionsByRepository {
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

const getTopIssues = gql `
  query getTopIssues($query: String!) {
    search(query: $query, first: 100, type: ISSUE) {
      issueCount
      nodes {
        ...IssueFragment
        ...PullRequestFragment
        ... on App { __typename }
        ... on MarketplaceListing { __typename }
        ... on Organization { __typename }
        ... on PullRequest { __typename }
        ... on User { __typename }
      }
    }
  }

  fragment PullRequestFragment on PullRequest {
    __typename

    id
    url
    title
    body
    createdAt
    updatedAt
    repository {
      nameWithOwner
      name
      url
    }
    labels(first: 100) {
      nodes {
        id
        name
        color
        isDefault
      }
    }
  }

  fragment IssueFragment on Issue {
    __typename

    id
    url
    title
    body
    createdAt
    updatedAt
    repository {
      nameWithOwner
      name
      url
    }
    labels(first: 100) {
      nodes {
        id
        name
        color
        isDefault
      }
    }
  }
`

const getRecentStatistics = gql `
query getRecentStatistics($baseQuery: String!, $prQuery: String!, $issueQuery: String!){
  repos: search(query: $baseQuery, type: REPOSITORY) {
    repositoryCount
  }
  users: search(query: $baseQuery, type: USER) {
    userCount
  }
  prs: search(query: $prQuery, type: ISSUE) {
    issueCount
  }
  issues: search(query: $issueQuery, type: ISSUE) {
    issueCount
  }
}`

module.exports = {
  getRateLimit,
  getGithubUser,
  getPullRequestContributionByRepositoryByUser,
  getCommitContributionByRepositoryByUser,
  getIssueContributionByRepositoryByUser,
  getTopIssues,
  getRecentStatistics,
}
