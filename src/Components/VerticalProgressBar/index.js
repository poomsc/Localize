import React from 'react'

import { keyframes } from '@emotion/core'
import { Flex, Box, Card } from 'rebass'
import styled from '@emotion/styled'

const Progress = styled.div`
    position: relative;
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    border: 1px solid #5225bd;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`
const g = keyframes`
    0% { background-color: #5225bd; }
    50% { background-color: #607e9e; }
    100% { background-color: #5225bd; }
`
const r = keyframes`
  from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
`

const ProgressBarLiquid = styled.div`
    z-index: 1;
    width: ${props => `${props.width + 20}px`};
    height: ${props => `${props.width + 20}px`};
    animation: ${g} 2500ms infinite ease-in-out,
        ${r} 3000ms infinite cubic-bezier(0.5, 0.5, 0.5, 0.5);
    position: absolute;
    bottom: -10px;
    right: -10px;
    background-color: #5225bd;
    border-radius: 40%;
`

const ProgressBar = styled.div`
    position: absolute;
    left: 0;
    top: 0px;
    width: ${props => `${props.width}px`};
    background-color: #5225bd;
    animation: ${g} 2500ms infinite ease-in-out;
    z-index: 2;
`

const VerticalProgressBar = ({ percent, ...props }) => {
    return (
        <Progress {...props}>
            <ProgressBar {...props} style={{ height: percent }}>
                <ProgressBarLiquid {...props}></ProgressBarLiquid>
            </ProgressBar>
        </Progress>
    )
}

export default VerticalProgressBar
