/* global gapi */
import React, { useState, useContext, useEffect } from 'react'
import styled from '@emotion/styled'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import Check from '@material-ui/icons/Check'
import { Flex, Box, Card } from 'rebass'
import {
    Step,
    StepLabel,
    StepConnector,
    Button,
    Paper,
    Stepper,
    Typography,
} from '@material-ui/core'
import ProfileForm from '../ProfileForm'
import SkillsForm from '../SkillsForm'
import { useForm } from 'react-hook-form'
import { StoreContext } from './store'
import axios from 'axios'
import HashLoader from 'react-spinners/HashLoader'
import Contact from '../../Components/Contact'

const Container = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  padding: 3em;
}
`
const ContactStyled = styled(Contact)`
    height: 500px;
`

const QontoConnector = withStyles({
    alternativeLabel: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    active: {
        '& $line': {
            borderColor: '#784af4',
        },
    },
    completed: {
        '& $line': {
            borderColor: '#784af4',
        },
    },
    line: {
        borderColor: '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
})(StepConnector)

const useQontoStepIconStyles = makeStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
    },
    active: {
        color: '#784af4',
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    completed: {
        color: '#784af4',
        zIndex: 1,
        fontSize: 18,
    },
})

function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles()
    const { active, completed } = props

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {completed ? (
                <Check className={classes.completed} />
            ) : (
                <div className={classes.circle} />
            )}
        </div>
    )
}

const JoinUs = props => {
    const [activeStep, setActiveStep] = useState(0)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [complete, setComplete] = useState(false)

    const { profile, skills } = useContext(StoreContext)

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1)
    }

    const resetForm = () => {
        profile[1]({
            name: undefined,
            contactNumber: undefined,
            email: undefined,
        })
        skills[1]({ skills: [], tools: [] })
    }

    const handleReset = () => {
        setActiveStep(0)
    }

    const getSteps = () => {
        return [`Profile`, `Skills`]
    }

    const onSubmitForm = async data => {
        if (activeStep === 0) {
            profile[1](data)
        }
        if (activeStep === getSteps().length - 1) {
            try {
                handleNext()
                const res = await axios.post(
                    `${process.env.REACT_APP_API_HOST}/api/submitform`,
                    {
                        ...profile[0],
                        ...skills[0],
                    }
                )
                setLoading(false)
                setComplete(true)
                resetForm()
            } catch (e) {
                setLoading(false)
                setError(true)
                console.log(e)
            }
        } else handleNext()
    }

    const profileForm = useForm()
    const skillsForm = useForm()

    const getStepContent = step => {
        switch (step) {
            case 0:
                return <ProfileForm formProps={profileForm} data={profile} />
            case 1:
                return <SkillsForm formProps={skillsForm} data={skills} />
            default:
                return 'Unknown step'
        }
    }

    const steps = getSteps()

    return (
        <>
            <p id="trigger-navBar" />
            <Box p={4} />
            <form
                onSubmit={
                    activeStep === 0
                        ? profileForm.handleSubmit(onSubmitForm)
                        : skillsForm.handleSubmit(onSubmitForm)
                }
            >
                <Container alignItems="center">
                    <Flex width={[1, 1, 3 / 5]} mb={3}>
                        <Stepper
                            elevation={1}
                            style={{ flex: `1 1 auto` }}
                            alternativeLabel
                            activeStep={activeStep}
                            connector={<QontoConnector />}
                        >
                            {steps.map(label => (
                                <Step key={label}>
                                    <StepLabel
                                        StepIconComponent={QontoStepIcon}
                                    >
                                        {label}
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Flex>
                    {activeStep === steps.length ? (
                        <Box width={[1, 1, 3 / 5]}>
                            <Paper>
                                <Flex
                                    p={4}
                                    flexDirection="column"
                                    alignItems="center"
                                >
                                    {loading && (
                                        <>
                                            <HashLoader
                                                size={120}
                                                color={'#123abc'}
                                                loading={loading}
                                            />
                                            <Box mt={4}>
                                                We're saving your information.
                                                Please wait a moment.
                                            </Box>
                                        </>
                                    )}
                                    {error && (
                                        <>
                                            <Box>
                                                We've a little problem. Please
                                                contact us.
                                            </Box>
                                            <ContactStyled />
                                        </>
                                    )}
                                    {complete && (
                                        <>
                                            <p align="center">
                                                Thank you for your submission.
                                            </p>
                                            <p align="center">
                                                If we have tasks that match with
                                                your skills and interest we’ll
                                                contact you then.
                                            </p>
                                            <NavLink to="/">
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                >
                                                    Back to Home Page.
                                                </Button>
                                            </NavLink>
                                            <Button onClick={handleReset}>
                                                Reset
                                            </Button>
                                        </>
                                    )}
                                </Flex>
                            </Paper>
                        </Box>
                    ) : (
                        <>
                            <Box width={[1, 1, 3 / 5]} mb={3}>
                                {getStepContent(activeStep)}
                            </Box>
                            <Box width={[1, 1, 3 / 5]}>
                                <Paper>
                                    <Box p={3}>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                        >
                                            Back
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            style={{ float: 'right' }}
                                        >
                                            {activeStep === steps.length - 1
                                                ? 'Finish'
                                                : 'Next'}
                                        </Button>
                                    </Box>
                                </Paper>
                            </Box>
                        </>
                    )}
                </Container>
            </form>
        </>
    )
}

export default JoinUs
