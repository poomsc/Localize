import React from 'react'
import styled from '@emotion/styled'
import WhoRV from './../Whorv'
import Uget from '../Uget'
import Vcan from '../Vcan'
import Cover from '../Cover'
import Foot from './../../Components/Foot'
import Soon from './../../Components/Soon'
import Interest from './../../Components/Interest'
import './style.css'
import FAQ from '../../Components/FAQ'

const Content = props => (
    <>
        <Cover id="section1" />
        <WhoRV />
        <Vcan />
        <Uget />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Soon />
        <br />
        <br />
        <br />
        <div data-aos="fade-up" className="interest">
            <br />
            <br />
            <Interest />
            <br />
            <br />
            <br />
        </div>
        <FAQ />
        <Foot />
    </>
)

export default Content
