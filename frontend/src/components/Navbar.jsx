import React from 'react'
import styled from 'styled-components'
import Switch from '@material-ui/core/Switch'
import github from '../assets/github.svg'

const StyledNavbar = styled.div`
    align-items: center;
    justify-content: space-between;
    display: flex;
    position: fixed;
    width: 100%;
    padding: 0 15px;
`
const Heading = styled.p`
    margin-left: 30px;
    font-size: 18px;
`

const Navbar = ({ dark, setDark }) => {
    return (
        <StyledNavbar>
            <Heading>Dashboard</Heading>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Switch checked={dark} onChange={e => setDark(e.target.checked)}/>
                <a href="https://github.com/yuubd/hackthenorth">
                    <img src={github} alt="GitHub" style={{ width: 25, height: 25, marginRight: 30 }}/>
                </a>
            </div>
        </StyledNavbar>
    )
}

export default Navbar
