import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 200px;
    height: 125px;
    display: flex;
    border-radius: 5px;
    font-size: 12px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
`
const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-bottom: 5px;
`

const UserCard = ({ name, login, followers, following, avatar_url }) => {
    return (
        <Card>
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
