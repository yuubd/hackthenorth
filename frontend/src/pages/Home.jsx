import React from 'react'
import styled from 'styled-components'
import { IssueCard, BlockRepoCard, LineRepoCard, UserCard, Box } from '../components/Cards'

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
    height: ${({h}) => h}px;
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

const repos = [{ full_name: 'kubernetes/kubernetes', language: 'Go', created_at: '2017-05-23T04:09:02Z' },{ full_name: 'kubernetes/kubernetes', language: 'Go', created_at: '2017-05-23T04:09:02Z' },{ full_name: 'kubernetes/kubernetes', language: 'Go', created_at: '2017-05-23T04:09:02Z' }]
const lines = [{ full_name: 'kubernetes/kubernetes', language: 'Go', created_at: '2017-05-23T04:09:02Z' },{ full_name: 'mui-org/material-ui', language: 'JavaScript', created_at: '2017-05-23T04:09:02Z' },{ full_name: 'kubernetes/kubernetes', language: 'Go', created_at: '2017-05-23T04:09:02Z' },{ full_name: 'kubernetes/kubernetes', language: 'Go', created_at: '2017-05-23T04:09:02Z' },{ full_name: 'kubernetes/kubernetes', language: 'Go', created_at: '2017-05-23T04:09:02Z' }]
const users = [{ name: 'Alice', login: 'yehee', followers: 13, following: 7, avatar_url: 'https://avatars0.githubusercontent.com/u/28884850?s=460&u=52acb3c52c65dfac5c93d0ac4eb5ade631bbb51b&v=4' },{ name: 'Alice', login: 'yehee', followers: 13, following: 7, avatar_url: 'https://avatars0.githubusercontent.com/u/28884850?s=460&u=52acb3c52c65dfac5c93d0ac4eb5ade631bbb51b&v=4' },{ name: 'Alice', login: 'yehee', followers: 13, following: 7, avatar_url: 'https://avatars0.githubusercontent.com/u/28884850?s=460&u=52acb3c52c65dfac5c93d0ac4eb5ade631bbb51b&v=4' }]
const issues = [{ title: 'Document our official blue color', labels: [{ name: 'Documentation', color: '#111E6C' }, { name: 'Critical', color: '#FF0000'}], comments: 3 },{ title: 'Document our official blue color', labels: [{ name: 'Documentation', color: '#111E6C' }, { name: 'Critical', color: '#FF0000'}], comments: 3 },{ title: 'Document our official blue color', labels: [{ name: 'Documentation', color: '#111E6C' }, { name: 'Critical', color: '#FF0000'}], comments: 3 }]

const WelcomeToOpenSource = () => (
    <div>
        <p>Welcome to Open Source</p>
        <Flex>
            {repos.map((props, i) => <BlockRepoCard key={i} {...props} />)}
        </Flex>
    </div>
)
const WeeklyWins = () => (
    <div>
        <p>Weekly Wins</p>
        <Flex>
            {users.map((props, i) => <UserCard key={i} {...props} />)}
        </Flex>
    </div>
)
const Contributions = () => (
    <div>
        <p>Contributions</p>
    </div>
)
const Stats = () => (
    <>
        <p>Statistics</p>
        <Flex>
            <BigSquare w={180} h={180}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Square w={85} h={85}>
                        <div style={{ fontWeight: 'bold', fontSize: 18 }}>21</div>
                        <div>Issues</div>
                    </Square>
                    <Square w={85} h={85}>
                        <div style={{ fontWeight: 'bold', fontSize: 18 }}>50</div>
                        <div>Commits</div>
                    </Square>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Square w={85} h={85}>
                        <div style={{ fontWeight: 'bold', fontSize: 18 }}>2.8M</div>
                        <div>Users</div>
                    </Square>
                    <Square w={85} h={85}>
                        <div style={{ fontWeight: 'bold', fontSize: 18 }}>12</div>
                        <div>PRs</div>
                    </Square>
                </div>
            </BigSquare>
            <Box w={430} h={180} style={{ height: 180 }} />
        </Flex>
    </>
)
const MostCritical = () => (
    <div>
        <p>Top 5 Most Critical Projects</p>
        {lines.map((props, i) => <LineRepoCard key={i} {...props} />)}
    </div>
)
const HelpWanted = () => (
    <div>
        <p>Top 5 Help Wanted Projects</p>
        {lines.map((props, i) => <LineRepoCard key={i} {...props} />)}
    </div>
)
const GoodFirstIssues = () => (
    <div>
        <p>Good First Issues</p>
        <Flex>
            {issues.map((props, i) => <IssueCard key={i} {...props} />)}
        </Flex>
    </div>
)

const Home = () => {
    return (
        <Section>
            <Column w={630} bp={1300}>
                <WelcomeToOpenSource />
                <WeeklyWins />
                <Contributions />
            </Column>
            <Column w={630} bp={1300}>
                <Stats />
                <div>
                    <Flex>
                        <MostCritical />
                        <HelpWanted />
                    </Flex>
                    <GoodFirstIssues />
                </div>
            </Column>
        </Section>
    )
}

export default Home
