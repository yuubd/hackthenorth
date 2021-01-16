import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 200px;
    height: 240px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
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
        <Card>
            <Title>{title}</Title>
            {labels.map(({ name, color }) => <Label key={name} color={color}>{name}</Label>)}
            <div>{comments} comments</div>
        </Card>
    )
}

export default IssueCard
