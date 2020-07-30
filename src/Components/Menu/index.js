import React from 'react'
import { NavLink } from 'react-router-dom'
import fireWork from './../../assets/icon/Localize.png'
import styled from '@emotion/styled'
import './style.css'
import Interest from '../Interest'

const Icon = styled.img(props => ({
    height: '4rem',
}))

const NavLinkStyled = styled(NavLink)`
    color: black;
    &hover {
        color: black;
    }
`

const Menu = props => (
    <div
        className="navbar"
        data-aos="fade-down"
        data-aos-anchor="#trigger-navBar"
        data-aos-anchor-placement="top-top"
    >
        <NavLink to="/">
            <Icon id="logo" src={fireWork} alt="firework logo" />
        </NavLink>
        <div id="joinUs" className="interest-container">
            <Interest />
        </div>
    </div>
)

export default Menu

// text-box
