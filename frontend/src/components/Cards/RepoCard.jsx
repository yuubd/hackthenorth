import React from 'react'
import styled from 'styled-components'
import Box from './Box'
import colors from '../../styles/colors'

const Block = styled(Box)`
    position: relative;
`
const Title = styled.div`
    font-size: 14px;
    height: fit-content;
    margin: auto 0;
`
const Label = styled.span`
    background-color: ${({color}) => color};
    border-radius: 15px;
    font-size: 12px;
    height: fit-content;
    margin: auto 0;
    padding: 0 2.5px;
    color: white;
`
const Timestamp = styled.span`
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 10px;
`
const Line = styled(Box)`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    &:last-child {
        margin-bottom: 0;
    }
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

export const BlockRepoCard = ({ name, language, createdSince }) => {
    return (
        <Block w={200} h={125}>
            <Title>{name}</Title>
            <Label color={colors[language]}>{language}</Label>
            <Timestamp>Created at {time(createdSince)}</Timestamp>
        </Block>
    )
}

export const LineRepoCard = ({ name, language, criticalityScore, url, ...props }) => {
    return (
        <Line w={300} h={38} {...props}>
            <Title><a href={url}>{name}</a> <span style={{ fontSize: 12 }}>{criticalityScore}</span></Title>
            <Label color={colors[language]}>{language}</Label>
        </Line>
    )
}
