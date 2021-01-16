import React from 'react'
import styled from 'styled-components'
import Box from './Box'

const Card = styled(Box)`
    display: flex;
    font-size: 12px;
    @media (max-width: 768px) {
        height: 150px;
    }
`
const Avatar = styled.img`
    object-fit: cover;
    border-radius: 5px 0 0 5px;
    margin: -10px;
    width: 50%;
`
const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    text-align: center;
    width: 50%;
`
const UserCard = ({ name, login, followers, following, avatar_url }) => {
    return (
        <Card w={200} h={125}>
            <Avatar src={avatar_url} alt="profile" />
            <UserInfo>
                <div>{login}</div>
                <div>{followers} followers</div>
                <div>{following} following</div>
            </UserInfo>
        </Card>
    )
}

export default UserCard
