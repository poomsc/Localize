import React, { useState } from 'react'
import styled from '@emotion/styled'
import {
    TextField,
    Tooltip,
    Paper,
    Typography,
    Button,
} from '@material-ui/core'
import { Flex, Text, Box } from 'rebass'
import Autocomplete, {
    createFilterOptions,
} from '@material-ui/lab/Autocomplete'
import HelpIcon from '@material-ui/icons/Help'
import presentation from '../../assets/icon/presentation.png'
import photovideo from '../../assets/icon/photovideo.svg'
import translate from '../../assets/icon/translate.svg'
import websiteapplication from '../../assets/icon/websiteapplication.svg'
import document from '../../assets/icon/document.png'
import design from '../../assets/icon/design.png'
import profile from '../../assets/icon/profile.png'
import { LabelForm, HelperText } from '../../Components/Text'

const filter = createFilterOptions()

const Container = styled(Paper)`
  flex-direction: column;
  padding: 2rem;
}
`

const Item = styled(Flex)`
    height: 120px;
    width: 100%;
    background: ${props => (props.active ? '#c7eef5' : 'none')};
    border: 2px solid #55bdca;
    text-align: center;
    transition: all 0.25s;
    cursor: pointer;
    overflow: hidden;
    @media (hover: hover) and (pointer: fine) {
        &:hover {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
                0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
    }
`

const ItemList = ({ title, icon, active, handleOnClick }) => {
    return (
        <Item
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            active={active}
            onClick={() => handleOnClick(title)}
        >
            <Box>
                <img src={icon} height="60" />
            </Box>
            <Box>{title}</Box>
        </Item>
    )
}

const tools = [
    'Microsoft Word',
    'Google Document',
    'Photoshop',
    'Illustrator',
    'PS',
    'AI',
    'Canva',
    'Microsoft PowerPoint',
    'Google Slide',
    'Chinese Language',
    'Japanese Language',
    'Englisg Language',
    'Final Cut Pro',
    'Vegas Pro',
    'Wordpress',
    'HTML/CSS/JS',
]

const SkillsForm = ({ formProps: { register, errors }, data }) => {
    const categories = [
        { title: 'Graphic Design', icon: design },
        { title: 'Documents', icon: document },
        { title: 'Resume', icon: profile },
        { title: 'Presentation', icon: presentation },
        { title: 'Translate', icon: translate },
        { title: 'Photo / Video', icon: photovideo },
        { title: 'Website / Application', icon: websiteapplication },
    ]

    const handleOnClick = title => {
        data[1]({
            ...data[0],
            skills:
                data[0].skills.indexOf(title) > -1
                    ? data[0].skills.filter(name => name !== title)
                    : [title, ...data[0].skills],
        })
    }
    const handleChange = (e, val) => {
        data[1]({
            ...data[0],
            tools: val.map(item =>
                item && item.inputValue ? item.inputValue : item
            ),
        })
    }

    return (
        <Container>
            <Flex alignItems="center" mb={3}>
                <Box mr={2}>
                    <LabelForm>Choose your skill set</LabelForm>
                    <HelperText>
                        คุณสามารถเลือกความถนัดของคุณได้มากกว่าหนึ่งรายการ
                    </HelperText>
                </Box>
            </Flex>
            <Flex mb={3} flexWrap="wrap" justifyContent="center">
                {categories.map(({ title, icon }, index) => (
                    <Box width={[1 / 2, 1 / 2, 0.33]} p={1} key={index}>
                        <ItemList
                            index={index}
                            title={title}
                            icon={icon}
                            active={data[0].skills.indexOf(title) > -1}
                            handleOnClick={handleOnClick}
                        />
                    </Box>
                ))}
            </Flex>
            <Box>
                <Autocomplete
                    multiple
                    id="tools"
                    options={tools}
                    getOptionLabel={option => option}
                    freeSolo={true}
                    value={data[0].tools}
                    filterOptions={(options, params) => {
                        const filtered = filter(options, params)

                        if (params.inputValue !== '') {
                            filtered.push({
                                inputValue: params.inputValue,
                                title: `Add "${params.inputValue}"`,
                            })
                        }

                        return filtered
                    }}
                    getOptionLabel={option => {
                        if (typeof option === 'string') {
                            return option
                        }
                        if (option.inputValue) {
                            return option.inputValue
                        }
                        return option.title
                    }}
                    renderOption={option =>
                        option && option.title ? option.title : option
                    }
                    onChange={handleChange}
                    renderInput={params => (
                        <TextField
                            {...params}
                            variant="outlined"
                            label="Tools"
                            placeholder="i.e. Photoshop, , Illustrator"
                        />
                    )}
                />
                <HelperText>
                    คุณสามารถเลือกเครื่องมือที่ใช้ได้ (
                    หากไม่มีสามารถเขียนเพิ่มได้ )
                </HelperText>
            </Box>
        </Container>
    )
}

export default SkillsForm
