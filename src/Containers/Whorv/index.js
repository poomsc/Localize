import React from 'react'
import styled from '@emotion/styled'
import firework_pic from './../../assets/pic/firework image.svg'
import './style.css'

const Div = styled.div(props => ({
    fontSize: "18px",
}))

const Whorv = props => (
    <section className="section" id="section2">
        <div className="content-layout">
            <div data-aos="fade-up-right" className="content-box" id="pic_style">
                <img src={firework_pic} alt="firework_pic"/>
            </div>
            <div data-aos="fade-up-left" className="content-box">
                <p style={{fontSize:"30px"}}><strong>FireWork ≠ ดอกไม้ไฟ</strong></p>
                <p>เราคือแพลตฟอร์มที่จะทำให้คนที่มีงานอยากจ้างและนักศึกษาที่ต้องการหาเงิน ได้เจอกัน และสำหรับนักศึกษา ก็ยังได้ฝึกทักษะ แล้วเก็บประสบการณ์การทำงานใส่ประวัติส่วนตัวด้วยนะ</p>
            </div>
        </div>
    </section>
)

export default Whorv