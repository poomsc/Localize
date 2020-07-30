import React from 'react'
import facebook_logo from './../../assets/icon/facebook.png'
import twitter_logo from './../../assets/icon/twitter.png'
import { Box } from 'reflexbox'
import styled from '@emotion/styled'
import './style.css'
import Contact from '../Contact'

const Icon = styled.img(props => ({
    height: '20px',
}))

const Hr = styled.hr(props => ({
    width: '85%',
    height: '1px',
    backgroundColor: '#A7A7A7',
    border: 'none',
    float: 'left',
    transform: 'translateX(5%)',
}))

const P = styled.p(props => ({
    margin: '0 5%',
    color: '#BABABA',
}))

const Menu = props => (
    <div>
        <Contact />
        <Hr />
        <br />
        <P>Copyright Localize, </P>
        <P>Call: 0931316936</P>
        <br />
    </div>
)

export default Menu
