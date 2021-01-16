import React from 'react'
import styled from 'styled-components'
import { IssueCard, BlockRepoCard, LineRepoCard, UserCard } from './Cards'

const Section = styled.div`
    width: 1300px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1200px) {
        width: 100%;
    }
`
const Square = styled.div`
    width: 85px;
    height: 85px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
`

const repos = [{ full_name: 'kubernetes/kubernetes', language: 'Go', created_at: '2017-05-23T04:09:02Z' },{ full_name: 'kubernetes/kubernetes', language: 'Go', created_at: '2017-05-23T04:09:02Z' },{ full_name: 'kubernetes/kubernetes', language: 'Go', created_at: '2017-05-23T04:09:02Z' }]
const users = [{ name: 'Alice', login: 'yehee', followers: 13, following: 7, avatar_url: 'https://avatars0.githubusercontent.com/u/28884850?s=460&u=52acb3c52c65dfac5c93d0ac4eb5ade631bbb51b&v=4' },{ name: 'Alice', login: 'yehee', followers: 13, following: 7, avatar_url: 'https://avatars0.githubusercontent.com/u/28884850?s=460&u=52acb3c52c65dfac5c93d0ac4eb5ade631bbb51b&v=4' },{ name: 'Alice', login: 'yehee', followers: 13, following: 7, avatar_url: 'https://avatars0.githubusercontent.com/u/28884850?s=460&u=52acb3c52c65dfac5c93d0ac4eb5ade631bbb51b&v=4' }]
const issues = [{ title: 'Document our official blue color', labels: [{ name: 'Documentation', color: '#22D273'}, { name: 'Critical', color: '#FF0000'}], comments: 3 },{ title: 'Document our official blue color', labels: [{ name: 'Documentation', color: '#22D273'}, { name: 'Critical', color: '#FF0000'}], comments: 3 },{ title: 'Document our official blue color', labels: [{ name: 'Documentation', color: '#22D273'}, { name: 'Critical', color: '#FF0000'}], comments: 3 }]

const Home = () => {
    return (
        <Section>
            <div style={{ width: 630 }}>
                <>
                    <p>Welcome to Open Source</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {repos.map(props => <BlockRepoCard {...props} />)}
                    </div>
                </>
                <>
                    <p>Weekly Wins</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {users.map(props => <UserCard {...props} />)}
                    </div>
                </>
                <>
                    <p>Contributions</p>
                </>
            </div>
            <div style={{ width: 630 }}>
                <div style={{ display: 'flex' }}>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <Square />
                            <Square />
                        </div>
                        <div style={{ display: 'flex' }}>
                            <Square />
                            <Square />
                        </div>
                    </div>
                    <div style={{ width: 430, height: 178, borderRadius: 5, boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.25)' }}></div>
                </div>
                <div>
                    <>
                        <p>Top 5 Most Critical Projects</p>
                        {repos.map(props => <LineRepoCard {...props} />)}
                    </>
                    <>
                        <p>Top 5 Help Wanted Projects</p>
                        {repos.map(props => <LineRepoCard {...props} />)}
                    </>
                    <>
                        <p>Good First Issues</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            {issues.map(props => <IssueCard {...props} />)}
                        </div>
                    </>
                </div>
            </div>
        </Section>
    )
}

export default Home
