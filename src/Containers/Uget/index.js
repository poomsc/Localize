import React from 'react'
import styled from '@emotion/styled'
import './style.css'
import quality_logo from './../../assets/icon/quality.png'
import fast_logo from './../../assets/icon/fast.png'
import money_logo from './../../assets/icon/money.png'
import hashtag_logo from './../../assets/icon/hashtag.png'
import skill_logo from './../../assets/icon/skill.png'
import profile_logo from './../../assets/icon/profile.png'
import tmp from './../../assets/icon/FireWork.png'
import Interest from './../../Components/Interest'

import { Flex, Box as BaseBox, Text } from 'rebass'

const HeadCard = ({ image, text }) => {
    const Img = styled.img(props => ({
        width: `5em`,
        height: `5em`,
        position: `absolute`,
        backgroundColor: `white`,
        borderRadius: `50%`,
    }))
    return (
        <div className="head-card">
            {/* <Img src={image}/> */}
            <p style={{ fontSize: '20px', color: 'white', textAlign: `center`, padding: '1em' }}><strong>{text}</strong></p>
        </div>
    )
}

const Box = styled(BaseBox)`
    transition: transform 0.5s;
    margin: 1em
`

const List = ({ image, header, desc }) => {
    const Img = styled.img(props => ({
        width: '2.5rem',
        height: '2.5rem',
        margin: '1em 1em',
        // backgroundColor: '#c7eef5',
    }))
    return (
        <>
            <div class="item">
                <Img src={image} />
                <div class="content">
                    <p class="header" style={{ margin: '0' }}>{header}</p>
                    <div class="meta">
                        <p style={{ fontSize: "18px", margin: '0' }}>{desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}


const Uget = props => (
    <section>
        <div className="flex-container">
            <Box data-aos="fade-right" width={[0.9, 0.45, 0.45]} id='boxL'>
                <HeadCard image={tmp} text={"อยากจ้าง"} />
                    <div className="body-card">
                        <div class="ui unstackable items">
                            <List image={quality_logo} header={"Quality"} desc={"งานที่ออกจากเรา มีคุณภาพแน่นอน"} />
                            <List image={fast_logo} header={"Fast"} desc={"งานร้อน งานเผา เราทำทัน"} />
                        </div>
                    </div>
            </Box>
            <Box data-aos="fade-left" width={[0.9, 0.45, 0.45]} id='boxR'>
                <HeadCard image={tmp} text={"อยากหาเงิน หาโปรไฟล์"} />
                <div className="body-card">
                    <div class="ui unstackable items">
                        <List image={money_logo} header={"Easy money"} desc={"หารายได้เสริม ได้เงินง่าย ๆ ทำงานหน้าคอมก็หาเงินได้"} />
                        <List image={skill_logo} header={"Develop skill"} desc={"ฝึกทักษะที่มีอยู่ให้แกร่งขึ้น และหางานใหม่ ๆ เพื่อเพิ่มทักษะใหม่ ๆ "} />
                        <List image={profile_logo} header={"Profile"} desc={"ได้โปรไฟล์การทำงานน่าเชื่อถือ สามารถนำไปประกอบ resume สำหรับสมัครงานหรือฝึกงานก็ได้"} />
                        <List image={hashtag_logo} header={"ไม่ต้องปั่น#เองให้เหนื่อย"} desc={"เราจะหางานและโปรโมทงานให้ด้วย"} />
                    </div>
                </div>
            </Box>
        </div>
        {/* <div data-aos="fade-up" className="interest">
            <br />
            <Interest />
            <br />
        </div> */}
    </section>
)

export default Uget
