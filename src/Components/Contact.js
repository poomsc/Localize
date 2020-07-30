import React from 'react'
import facebook_logo from './../assets/icon/facebook.png'
import twitter_logo from './../assets/icon/twitter.png'
import styled from '@emotion/styled'
const Icon = styled.img(props => ({
    height: '20px',
}))

const Contact = props => {
    return (
        <div className="option">
            <a href="https://twitter.com/Firewor27037419">
                <Icon src={twitter_logo} alt="twitter logo" />
            </a>
            <a href="https://www.facebook.com/FireWork-101385494826075/">
                <Icon src={facebook_logo} alt="facebook logo" />
            </a>

            <a href="tel:0910785410" class="hover">
                Call us
            </a>
            <a
                href="mailto:firework.platform@gmail.com?Subject=FireWork%20platform"
                class="hover"
            >
                Support
            </a>
        </div>
    )
}

export default Contact
