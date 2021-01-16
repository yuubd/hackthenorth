import React from 'react'
import styled from 'styled-components'
import Box from './Box'

const Card = styled(Box)`
    display: flex;
    font-size: 12px;
`
const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-bottom: 5px;
`

const UserCard = ({ name, login, followers, following, avatar_url }) => {
    return (
        <Card w={200} h={125}>
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Avatar src={avatar_url} alt="profile" />
                {/* <div style={{ fontWeight: 'bold' }}>{name}</div> */}
                <div>{login}</div>
            </div>
            <div style={{
                flex: 1.5,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div>{followers} followers</div>
                <div>{following} following</div>
            </div>
        </Card>
    )
}

export default UserCard
