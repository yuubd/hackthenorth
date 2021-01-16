import React from 'react'
import styled from 'styled-components'
import Box from './Box'

const Card = styled(Box)`
    font-size: 12px;
`
const Title = styled.div`
    font-size: 14px;
`
const Label = styled.span`
    background-color: ${({color}) => color};
    border-radius: 15px;
    height: fit-content;
    margin: auto 5px auto 0;
    padding: 0 2.5px;
    color: white;
`

const IssueCard = ({ title, labels, comments }) => {
    return (
        <Card w={200} h={240}>
            <Title>{title}</Title>
            {labels.map(({ name, color }) => <Label key={name} color={color}>{name}</Label>)}
            <div>{comments} comments</div>
        </Card>
    )
}

export default IssueCard
