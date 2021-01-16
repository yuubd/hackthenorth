import React from 'react'
import styled from 'styled-components'
import { ResponsiveLine as Line } from '@nivo/line'
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
const data = [{"id":"japan","color":"hsl(345, 70%, 50%)","data":[{"x":"plane","y":186},{"x":"helicopter","y":234},{"x":"boat","y":126},{"x":"train","y":227},{"x":"subway","y":158},{"x":"bus","y":104},{"x":"car","y":226},{"x":"moto","y":287},{"x":"bicycle","y":17},{"x":"horse","y":11},{"x":"skateboard","y":187},{"x":"others","y":27}]},{"id":"france","color":"hsl(304, 70%, 50%)","data":[{"x":"plane","y":5},{"x":"helicopter","y":90},{"x":"boat","y":237},{"x":"train","y":114},{"x":"subway","y":13},{"x":"bus","y":200},{"x":"car","y":166},{"x":"moto","y":287},{"x":"bicycle","y":68},{"x":"horse","y":259},{"x":"skateboard","y":77},{"x":"others","y":80}]},{"id":"us","color":"hsl(65, 70%, 50%)","data":[{"x":"plane","y":254},{"x":"helicopter","y":201},{"x":"boat","y":196},{"x":"train","y":18},{"x":"subway","y":122},{"x":"bus","y":291},{"x":"car","y":179},{"x":"moto","y":85},{"x":"bicycle","y":164},{"x":"horse","y":1},{"x":"skateboard","y":136},{"x":"others","y":263}]},{"id":"germany","color":"hsl(226, 70%, 50%)","data":[{"x":"plane","y":129},{"x":"helicopter","y":92},{"x":"boat","y":36},{"x":"train","y":102},{"x":"subway","y":276},{"x":"bus","y":93},{"x":"car","y":252},{"x":"moto","y":220},{"x":"bicycle","y":263},{"x":"horse","y":34},{"x":"skateboard","y":233},{"x":"others","y":277}]},{"id":"norway","color":"hsl(299, 70%, 50%)","data":[{"x":"plane","y":178},{"x":"helicopter","y":61},{"x":"boat","y":287},{"x":"train","y":41},{"x":"subway","y":210},{"x":"bus","y":83},{"x":"car","y":195},{"x":"moto","y":281},{"x":"bicycle","y":7},{"x":"horse","y":241},{"x":"skateboard","y":234},{"x":"others","y":14}]}]

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
        <Box h={380} fixed>
            <Line
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'transportation',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </Box>
    </div>
)
const Stats = () => (
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
