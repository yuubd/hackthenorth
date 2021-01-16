import React from 'react'
import styled from 'styled-components'
import { IssueCard, BlockRepoCard, LineRepoCard, UserCard } from '../components/Cards'

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
`

const repos = [{ full_name: 'kubernetes/kubernetes', language: 'Go', created_at: '2017-05-23T04:09:02Z' },{ full_name: 'kubernetes/kubernetes', language: 'Go', created_at: '2017-05-23T04:09:02Z' },{ full_name: 'kubernetes/kubernetes', language: 'Go', created_at: '2017-05-23T04:09:02Z' }]
const lines = [{ full_name: 'kubernetes/kubernetes', language: 'Go', created_at: '2017-05-23T04:09:02Z' },{ full_name: 'mui-org/material-ui', language: 'JavaScript', created_at: '2017-05-23T04:09:02Z' },{ full_name: 'kubernetes/kubernetes', language: 'Go', created_at: '2017-05-23T04:09:02Z' },{ full_name: 'kubernetes/kubernetes', language: 'Go', created_at: '2017-05-23T04:09:02Z' },{ full_name: 'kubernetes/kubernetes', language: 'Go', created_at: '2017-05-23T04:09:02Z' }]
const users = [{ name: 'Alice', login: 'yehee', followers: 13, following: 7, avatar_url: 'https://avatars0.githubusercontent.com/u/28884850?s=460&u=52acb3c52c65dfac5c93d0ac4eb5ade631bbb51b&v=4' },{ name: 'Alice', login: 'yehee', followers: 13, following: 7, avatar_url: 'https://avatars0.githubusercontent.com/u/28884850?s=460&u=52acb3c52c65dfac5c93d0ac4eb5ade631bbb51b&v=4' },{ name: 'Alice', login: 'yehee', followers: 13, following: 7, avatar_url: 'https://avatars0.githubusercontent.com/u/28884850?s=460&u=52acb3c52c65dfac5c93d0ac4eb5ade631bbb51b&v=4' }]
const issues = [{ title: 'Document our official blue color', labels: [{ name: 'Documentation', color: '#111E6C' }, { name: 'Critical', color: '#FF0000'}], comments: 3 },{ title: 'Document our official blue color', labels: [{ name: 'Documentation', color: '#111E6C' }, { name: 'Critical', color: '#FF0000'}], comments: 3 },{ title: 'Document our official blue color', labels: [{ name: 'Documentation', color: '#111E6C' }, { name: 'Critical', color: '#FF0000'}], comments: 3 }]

const Home = () => {
    return (
        <Section>
            <div style={{ width: 630 }}>
                <div>
                    <p>Welcome to Open Source</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {repos.map((props, i) => <BlockRepoCard key={i} {...props} />)}
                    </div>
                </div>
                <div>
                    <p>Weekly Wins</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {users.map((props, i) => <UserCard key={i} {...props} />)}
                    </div>
                </div>
                <div>
                    <p>Contributions</p>
                </div>
            </div>
            <div style={{ width: 630 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', height: 180 }}>
                    <div style={{ width: 180 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                            <Square>
                                <div style={{ fontWeight: 'bold', fontSize: 18 }}>21</div>
                                <div>Issues</div>
                            </Square>
                            <Square>
                                <div style={{ fontWeight: 'bold', fontSize: 18 }}>50</div>
                                <div>Commits</div>
                            </Square>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Square>
                                <div style={{ fontWeight: 'bold', fontSize: 18 }}>2.8M</div>
                                <div>Users</div>
                            </Square>
                            <Square>
                                <div style={{ fontWeight: 'bold', fontSize: 18 }}>12</div>
                                <div>PRs</div>
                            </Square>
                        </div>
                    </div>
                    <div style={{ width: 430, borderRadius: 5, boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.25)' }}></div>
                </div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <p>Top 5 Most Critical Projects</p>
                            {lines.map((props, i) => <LineRepoCard key={i} {...props} />)}
                        </div>
                        <div>
                            <p>Top 5 Help Wanted Projects</p>
                            {lines.map((props, i) => <LineRepoCard key={i} {...props} />)}
                        </div>
                    </div>
                    <div>
                        <p>Good First Issues</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            {issues.map((props, i) => <IssueCard key={i} {...props} />)}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Home
