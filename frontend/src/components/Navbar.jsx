import React from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.div`
    width: 100%;
    height: 50px;
`
const Heading = styled.h1`
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
