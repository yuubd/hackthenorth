import React from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.div`
    width: 100%;
`
const Heading = styled.p`
    margin-left: 15px;
    font-size: 18px;
`

const Navbar = () => {
    return (
        <StyledNavbar>
            <Heading>Dashboard</Heading>
        </StyledNavbar>
    )
}

export default Navbar
