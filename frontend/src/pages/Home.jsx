import React, { useState } from 'react'
import styled from 'styled-components'
import { gql, useQuery } from '@apollo/client'
import { Select, MenuItem } from '@material-ui/core'
import Contributions from '../components/Contributions'
import { IssueCard, BlockRepoCard, LineRepoCard, UserCard, Box } from '../components/Cards'

const GET_CRITS = gql`
query ($language: String) {
    mostCritProjects(language: $language) {
        projectId
        name
        url
        fullName
        language
        createdSince
        contributorCount
        commitFrequency
        commentFrequency
        dependentsCount
        criticalityScore
    }
}
`
const GET_ISSUES = gql`
query {
    topIssues {
        id
        title
        url
        body
        createdAt
        updatedAt
        repository {
            url
            name
            nameWithOwner
        }
        labels {
            id
            name
            color
            isDefault
        }
    }
}
`
const GET_NEWS = gql`
query {
    recentRepositories {
        url
        name
        nameWithOwner
        description
        stargazerCount
        createdAt
        updatedAt
        primaryLanguage {
            id
            name
            color
        }
    }
}
`

const GET_ISSUES = gql`
    query {
        topIssues {
            id
            title
            url
            body
            createdAt
            updatedAt
            repository {
                url
                name
                nameWithOwner
            }
            labels {
                id
                name
                color
                isDefault
            }
        }
    }
`

const Section = styled.div`
    box-sizing: border-box;
    width: 1300px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1300px) {
        box-sizing: border-box;
        display: block;
        padding: 20px;
        width: 100%;
    }
`
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        display: block;
    }
`
const Column = styled.div`
    width: ${({w}) => w}px;
    @media (max-width: ${({bp}) => bp}px) {
        margin: auto;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`
const Square = styled(Box)`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 768px) {
        &:first-child {
            margin-right: 15px;
        }
    }
`
const BigSquare = styled.div`
    width: ${({w}) => w}px;
    height: ${({h}) => h}px;
    @media (max-width: 768px) {
        width: 100%;
        height: auto;
    }
`

const users = [{ name: 'GwangChul Kim', login: 'yuubd', followers: 6, following: 6, avatar_url: 'https://avatars1.githubusercontent.com/u/29908984?s=460&u=2573e8a1294b10ae94257ba1b953b6c9a5acebe1&v=4' },{ name: 'Seung Won [Tom] Lee', login: 'bwdmonkey', followers: 17, following: 17, avatar_url: 'https://avatars0.githubusercontent.com/u/19914676?s=460&u=3bc02c0251fdd392d3edb2183c050ad13e4232ef&v=4' },{ name: 'Alice', login: 'yehee', followers: 13, following: 7, avatar_url: 'https://avatars0.githubusercontent.com/u/28884850?s=460&u=52acb3c52c65dfac5c93d0ac4eb5ade631bbb51b&v=4' }]
const data = [{"id":"commits","color":"hsl(348, 95%, 68%)","data":[{"x":"plane","y":186},{"x":"helicopter","y":234},{"x":"boat","y":126},{"x":"train","y":227},{"x":"subway","y":158},{"x":"bus","y":104},{"x":"car","y":226},{"x":"moto","y":287},{"x":"bicycle","y":17},{"x":"horse","y":11},{"x":"skateboard","y":187},{"x":"others","y":27}]},{"id":"pull requests","color":"hsl(39, 100%, 50%)","data":[{"x":"plane","y":5},{"x":"helicopter","y":90},{"x":"boat","y":237},{"x":"train","y":114},{"x":"subway","y":13},{"x":"bus","y":200},{"x":"car","y":166},{"x":"moto","y":287},{"x":"bicycle","y":68},{"x":"horse","y":259},{"x":"skateboard","y":77},{"x":"others","y":80}]},{"id":"comments","color":"hsl(155, 67%, 45%)","data":[{"x":"plane","y":254},{"x":"helicopter","y":201},{"x":"boat","y":196},{"x":"train","y":18},{"x":"subway","y":122},{"x":"bus","y":291},{"x":"car","y":179},{"x":"moto","y":85},{"x":"bicycle","y":164},{"x":"horse","y":1},{"x":"skateboard","y":136},{"x":"others","y":263}]}]

const WelcomeToOpenSource = () => {
    const { loading, error, data } = useQuery(GET_NEWS)

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    return (
        <div>
            <p>Welcome to Open Source</p>
            <Flex>
                {data.recentRepositories.slice(0, 3).map((props, i) => <BlockRepoCard key={i} {...props} />)}
            </Flex>
        </div>
    )
}
const WeeklyHighlights = () => (
    <div>
        <p>Weekly Highlights</p>
        <Flex>
            {users.map((props, i) => <UserCard key={i} {...props} />)}
        </Flex>
    </div>
)
const Stats = ({ selected: { fullName, criticalityScore, contributorCount, commitFrequency, commentFrequency, dependentsCount } }) => (
    <>
        <p>Statistics</p>
        <Flex>
            <BigSquare w={180} h={180}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Square w={85} h={85} fixed>
                        <div style={{ fontWeight: 'bold', fontSize: 18 }}>21</div>
                        <div>Issues</div>
                    </Square>
                    <Square w={85} h={85} fixed>
                        <div style={{ fontWeight: 'bold', fontSize: 18 }}>50</div>
                        <div>Commits</div>
                    </Square>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Square w={85} h={85} fixed>
                        <div style={{ fontWeight: 'bold', fontSize: 18 }}>2.8M</div>
                        <div>Users</div>
                    </Square>
                    <Square w={85} h={85} fixed>
                        <div style={{ fontWeight: 'bold', fontSize: 18 }}>12</div>
                        <div>PRs</div>
                    </Square>
                </div>
            </BigSquare>
            <Box w={430} h={180} style={{ height: 180, padding: 20, position: 'relative' }}>
                <div style={{ position: 'absolute', right: 20, top: 20, textAlign: 'center', fontSize: 12 }}>
                    <div style={{ fontSize: 24, fontWeight: 'bold' }}>{criticalityScore}</div>
                    <div>Highly critical</div>
                </div>
                <div style={{ fontSize: 16 }}>{fullName}</div>
                <div style={{ fontSize: 12 }}>
                    {/* TODO: no datetime available? */}
                    <p>Created at Jan 16, 2021, 4:49 PM</p>
                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: 1, padding: 10 }}>{`${dependentsCount} projects depend on this project`}</div>
                        <div style={{ flex: 1, padding: 10 }}>{`${contributorCount} contributors`}</div>
                        <div style={{ flex: 1, padding: 10 }}>{`${commitFrequency} commits per week`}</div>
                        <div style={{ flex: 1, padding: 10 }}>{`${commentFrequency} comments per week`}</div>
                    </div>
                    <a href="https://github.com/ossf/criticality_score" style={{ color: '#3884AE', float: 'right' }}>Curious how we compute criticality score?</a>
                </div>
            </Box>
        </Flex>
    </>
)
const MostCritical = ({ setSelected }) => {
    const { loading, error, data } = useQuery(GET_CRITS)

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    return (
        <div>
            <p>Top 5 Most Critical Projects</p>
            {data.mostCritProjects.slice(0, 5).map((props, i) => <LineRepoCard key={i} {...props} onClick={() => setSelected(props)} />)}
        </div>
    )
}
const ByLanguage = ({ setSelected, language, setLanguage }) => {
    const { loading, error, data } = useQuery(GET_CRITS, { variables: { language } }) // language

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <p>Top Projects by Language</p>
                <Select
                    autoWidth
                    value={language}
                    style={{ marginLeft: 10 }}
                    onChange={e => setLanguage(e.target.value)}>
                    <MenuItem value="Go">Go</MenuItem>
                    <MenuItem value="JavaScript">JavaScript</MenuItem>
                    <MenuItem value="Rust">Rust</MenuItem>
                    <MenuItem value="C++">C++</MenuItem>
                    <MenuItem value="Java">Java</MenuItem>
                </Select>
            </div>
            {data.mostCritProjects.slice(0, 5).map((props, i) => <LineRepoCard key={i} {...props} onClick={() => setSelected(props)} />)}
        </div>
    )
}
const GoodFirstIssues = () => {
    const { loading, error, data } = useQuery(GET_ISSUES)

    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    return (
        <div>
            <p>Good First Issues</p>
            <Flex>
                {data.topIssues.slice(0, 3).map((props, i) => <IssueCard key={i} {...props} />)}
            </Flex>
        </div>
    )
}

const Home = () => {
    const [selected, setSelected] = useState({
        "projectId": "400",
        "name": "kubernetes",
        "url": "https://github.com/kubernetes/kubernetes",
        "fullName": "kubernetes/kubernetes",
        "language": "Go",
        "createdSince": 80,
        "contributorCount": 3689,
        "commitFrequency": 101.6,
        "commentFrequency": 5.7,
        "dependentsCount": 407553,
        "criticalityScore": 0.98634
    })
    const [language, setLanguage] = useState('all')
    
    return (
        <Section>
            <Column w={630} bp={1300}>
                <WelcomeToOpenSource />
                <WeeklyHighlights />
                <Contributions data={data} />
            </Column>
            <Column w={630} bp={1300}>
                <Stats selected={selected} />
                <div>
                    <Flex>
                        <MostCritical setSelected={setSelected} />
                        <ByLanguage
                            language={language}
                            setSelected={setSelected}
                            setLanguage={setLanguage} />
                    </Flex>
                    <GoodFirstIssues />
                </div>
            </Column>
        </Section>
    )
}

export default Home
