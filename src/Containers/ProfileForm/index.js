import React from 'react'
import styled from '@emotion/styled'

import { TextField, Paper } from '@material-ui/core'

const Container = styled(Paper)`
  flex-direction: column;
  padding: 2rem;
}
`

const ProfileForm = ({ formProps: { register, errors }, data }) => {
    const { name, contactNumber, email } = data[0]
    return (
        <Container>
            <TextField
                id="name"
                name="name"
                label="Name-Surname *"
                placeholder="Ex. Firstname Lastname"
                fullWidth
                inputRef={register({ required: true })}
                error={!!errors.name}
                margin="normal"
                defaultValue={name}
                helperText={errors.name ? 'Please fill tis field.' : ''}
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
            <TextField
                id="contactNumber"
                name="contactNumber"
                label="Contact Number *"
                placeholder="Ex. 091 0785410"
                fullWidth
                defaultValue={contactNumber}
                inputRef={register({ required: true })}
                error={!!errors.contactNumber}
                margin="normal"
                helperText={
                    errors.contactNumber ? 'Please fill tis field.' : ''
                }
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
            <TextField
                id="email"
                name="email"
                label="Email *"
                placeholder="Ex. fireworker@firework.life"
                fullWidth
                defaultValue={email}
                inputRef={register({ required: true })}
                error={!!errors.email}
                margin="normal"
                helperText={errors.email ? 'Please fill tis field.' : ''}
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
            {/* <TextField
                id="other"
                label="Want to tell us anything more?"
                placeholder="Tell us about your."
                multiline
                fullWidth
                rows="5"
                margin="normal"
                variant="outlined"
            /> */}
        </Container>
    )
}

export default ProfileForm
