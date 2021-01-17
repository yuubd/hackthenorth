import React from 'react'
import styled from 'styled-components'
import Box from './Box'

const Card = styled(Box)`
    font-size: 12px;
`
const Title = styled.div`
    font-size: 14px;
`
const Label = styled.div`
    background-color: #${({color}) => color};
    border-radius: 2em;
    color: white;
    display: inline-block;
    height: fit-content;
    margin: auto 5px 2.5px 0;
    padding: 2.5px 5px;
`

const IssueCard = ({ title, body, createdAt, labels }) => {
    return (
        <Card w={200} h={240}>
            <Title>{title}</Title>
            <div>
                {labels.map(({ name, color }) => <Label key={name} color={color}>{name}</Label>)}
            </div>
            <div style={{ overflowWrap: 'anywhere' }}>{body.slice(0, 200)}</div>
        </Card>
    )
}

export default IssueCard
