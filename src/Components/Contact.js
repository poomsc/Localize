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
            <a>
                <Icon src={twitter_logo} alt="twitter logo" />
            </a>
            <a>
                <Icon src={facebook_logo} alt="facebook logo" />
            </a>

            <a href="tel:0931316936" class="hover">
                Call us
            </a>
            <a
                href="mailto:sakchai.wachi@gmail.com?Subject=Localize%20support"
                class="hover"
            >
                Support
            </a>
        </div>
    )
}

export default Contact
