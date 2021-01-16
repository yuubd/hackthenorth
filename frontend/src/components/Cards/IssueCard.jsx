import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 200px;
    height: 240px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
`
const Title = styled.p`
    font-size: 14px;
`
const Label = styled.div`
    height: 20px;
    border-radius: 10px;
    background-color: ${({color}) => color}
`

const IssueCard = ({ title, labels, comments }) => {
    return (
        <Card>
            <Title>{title}</Title>
            {labels.map(({ name, color }) => <Label color={color}>{name}</Label>)}
            <span>{comments} comments</span>
        </Card>
    )
}

export default IssueCard
