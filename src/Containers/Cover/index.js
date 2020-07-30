import React from 'react'
import styled from '@emotion/styled'
import Interest from './../../Components/Interest'
import wall_bg from './../../assets/pic/wall_bg1.svg'
import font_bg from './../../assets/pic/font_bg1.svg'
import './style.css'
import { Text } from 'rebass'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 700,
});

const Slide = styled.a(props => ({
    position: `absolute`,
    margin: `45vh 0 0 0`,
    alignItems: `center`,
    fontSize: `20px`,
    color: `#f07c41`
}))

const Cover = props => (
    <section className="section">
        <div class="cover-content">
            <div class="cover-box" id="text-box">
                <Text m={["3em 0 1em 0", "5em 0 1em 0", "0 0 1em 0"]}>
                    <h1 style={{ margin: `0` }}>FireWork</h1>
                    <p>any work for any one</p>
                </Text>
                <Interest />
                <p id="trigger-navBar"/>
            </div>
            <div class="cover-box">
                <img src={font_bg} alt="first_wall_bg" />
            </div>
            <Slide href="#section2" id="explore">
                <p style={{margin: `0`}}>Explore</p>
                <p style={{textAlign: `center`}}>|</p>
            </Slide>
        </div>
    </section>
)

export default Cover