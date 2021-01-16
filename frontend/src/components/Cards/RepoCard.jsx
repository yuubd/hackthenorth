import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
    padding: 10px;
    box-sizing: border-box;
    width: 200px;
    height: 125px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
    position: relative;
`
const Title = styled.div`
    font-size: 14px;
`
const Label = styled.span`
    background-color: ${({color}) => color};
    border-radius: 15px;
    font-size: 12px;
    height: 20px;
`
const Timestamp = styled.span`
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 10px;
`
const Line = styled.div`
    width: 300px;
    height: 38px;
    display: flex;
    justify-content:
`

// https://stackoverflow.com/questions/19407305/how-to-show-only-hours-and-minutes-from-javascript-date-tolocaletimestring
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
// eslint-disable-next-line
const time = date => (date ? new Date(date) : new Date()).toLocaleTimeString(navigator.language, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
})

export const BlockRepoCard = ({ full_name, language, created_at }) => {
    return (
        <Block>
            <Title>{full_name}</Title>
            <Label color="#22D273">{language}</Label>
            <Timestamp>Created at {time(created_at)}</Timestamp>
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
