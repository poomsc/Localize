/** @jsx jsx */
import React from 'react'
import { Link } from 'react-router-dom'
import { jsx, css } from '@emotion/core'
import { Button } from '@material-ui/core'
import { StylesProvider } from '@material-ui/core/styles'

const Interest = props => (
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeSVvQ7vaxD-Pd9q4fs8nZeFQfCu3xWBPi3kthdNOviHfm5kA/viewform">
        <StylesProvider injectFirst>
            <Button
                css={css`
                    background: linear-gradient(
                        45deg,
                        #fe6b8b 30%,
                        #ff8e53 90%
                    );
                    border-radius: 3;
                    border: 0;
                    color: white;
                    height: 3em;
                    padding: 0 30px;
                    boxshadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
                    font-weight: bold;
                `}
            >
                สนใจเข้าร่วม
            </Button>
        </StylesProvider>
    </a>
)
export default Interest
