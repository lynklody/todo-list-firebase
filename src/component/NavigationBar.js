import React from 'react'
import SignedInLink from './SignedInLink'
import SignedOutLink from './SignedOutLink'
import { Container, Typography } from '@material-ui/core'

const NavigationBar = (props) => {
    const { auth, profile, authError } = props;
    // const link = auth.uid ? <SignedInLink profile={profile} /> : <SignedOutLink />;
    const link = <SignedInLink/>
    return (
        <Container>
            <Typography>
                { link }
            </Typography>
        </Container>
    )
}

export default NavigationBar;