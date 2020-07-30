import React from 'react'
import styled from '@emotion/styled'
import './style.css'
import document_logo from './../../assets/icon/document.png'
import cv_logo from './../../assets/icon/cv.png'
import prentation_logo from './../../assets/icon/presentation.png'
import other_logo from './../../assets/icon/other.png'
import Parallax_bg2 from './../../assets/pic/wall_parallax.jpg'
import fast_logo from './../../assets/icon/fast.png'


import { Flex, Box, Text } from 'rebass'

const Img = styled.img(props => ({
    width: '100%',
}))

const Parallax = styled.div(props => ({
    textAlign: 'center',
    fontSize: '22px',
    margin: '0',
    backgroundImage: `url(${Parallax_bg2})`,
    backgroundSize: `cover`,
    webkitBackgroundSize: `cover`,
    mozBackgroundSize: `cover`,
    oBackgroundSize: `cover`,
    backgroundAttachment: `fixed`,
    backgroundRepeat: `no-repeat`,
    fontSize: `30px`,
}))

const Vcan = props => (
    <section className="section">
        <Parallax>
            <Box p={["20vh 0", "25vh 0", "25vh 0"]}>
                <Text fontSize={[4, 5, 5]}
                    fontWeight='bold'
                    color='primary'>
                    เรากำลังหาใคร?
                </Text>
            </Box>
        </Parallax>
        <div className="container">
            <Box data-aos="zoom-in-up" width={['40%', 1 / 5, 1 / 7]}>
                <div className="card-item">
                    <Img src={document_logo} />
                    <p style={{margin:`0`}}><strong>งานเอกสาร</strong></p>
                    <p>ใช้ Word พื้นฐานก็ได้นะ</p>
                </div>
            </Box>
            <Box data-aos="zoom-in-up" width={['40%', 1 / 5, 1 / 7]}>
                <div className="card-item">
                    <Img src={cv_logo} />
                    <p style={{margin:`0`}}><strong>Resume</strong></p>
                    <p>ในสไตล์ของตัวเอง</p>
                </div>
            </Box>
            <Box data-aos="zoom-in-up" width={['40%', 1 / 5, 1 / 7]}>
                <div className="card-item">
                    <Img src={prentation_logo} />
                    <p style={{margin:`0`}}><strong>งานนำเสนอ</strong></p>
                    <p>ppt, canva, ...</p>
                </div>
            </Box>
            <Box data-aos="zoom-in-up" width={['40%', 1 / 5, 1 / 7]}>
                <div className="card-item">
                    <Img src={other_logo} />
                    <p style={{margin:`0`}}><strong>อื่น ๆ</strong></p>
                    <p>ลงชื่อไว้เลย</p>
                </div>
            </Box>
        </div>
    </section>
)

export default Vcan
