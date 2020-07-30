import React from 'react'
import styled from '@emotion/styled'
import take_box from './../../assets/pic/take_box.svg'
import './style.css'

const Div = styled.div(props => ({
    fontSize: "18px",
}))

const Whorv = props => (
    <section className="section" id="section2">
        <div className="content-layout">
            <div data-aos="fade-up-right" className="content-box" id="pic_style">
                <img src={take_box} alt="firework_pic"/>
            </div>
            <div data-aos="fade-up-left" className="content-box">
                <p style={{fontSize:"30px"}}><strong>Localize ทำอะไร ๆ ให้เป็นท้องถิ่น</strong></p>
                <p>เราคือ StartUp ที่อยากจะส่งเสริมและยกคุณภาพของสินค้าท้องถิ่นต่าง ๆ ให้เป็นที่รู้จักและทั่วถึงมากขึ้น ด้วยการทำแพคเกจจิ้ง(packaging) ให้ดูดีมากยิ่งขึ้น</p>
                <p>เราอยากเป็นส่วนหนึ่งของคุณที่จะทำให้สินค้าของคุณดูดีขึ้น และมียอดขายที่เพิ่มขึ้น จากการออกแบบแพคเกจจิ้ง(packaging design)ของพวกเรา</p>
            </div>
        </div>
    </section>
)

export default Whorv