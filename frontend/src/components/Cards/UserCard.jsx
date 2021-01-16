import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 200px;
    height: 100px;
    display: flex;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
`
const Avatar = styled.img`
    width: 50px;
    height: 50px;
`

const UserCard = ({ name, login, followers, following, avatar_url }) => {
    return (
        <Card>
            <>
                <Avatar src={avatar_url} alt="profile" />
                <p>{name}</p>
                <p>{login}</p>
            </>
            <>
                <span>{followers} followers</span>
                <span>{following} following</span>
            </>
        </Card>
    )
}

export default UserCard
