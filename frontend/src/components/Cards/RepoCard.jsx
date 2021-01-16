import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
    width: 200px;
    height: 125px;
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
const Line = styled.div`
    width: 300px;
    height: 38px;
    display: flex;
    justify-content:
`

export const BlockRepoCard = ({ full_name, language, created_at }) => {
    return (
        <Block>
            <Title>{full_name}</Title>
            <Label color="#22D273">{language}</Label>
            <p>{created_at}</p>
        </Block>
    )
}

export const LineRepoCard = ({ full_name, language }) => {
    return (
        <Line>
            <Title>{full_name}</Title>
            <Label color="#22D273">{language}</Label>
        </Line>
    )
}
