import React from 'react'
import { Grid, Box, ButtonGroup, Button, AppBar, useScrollTrigger, Slide } from '@material-ui/core'

const HideOnScroll = (props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined
    });
    return (
        <Slide 
            appear={false}
            direction="down"
            in={!trigger} >
            { children }
        </Slide>
    )
}

const SignedInLink = () => {
    return (
        <HideOnScroll>
        <AppBar
            color="transparent">

        <Grid container
            direction="row"
            justify="space-around"
            marginTop="15px"
            alignItems="center">
            <Box display="flex"
                 marginTop={1}
                 marginBottom={1}
                 alignItems="left"
                 justifyContent="center">
                <ButtonGroup 
                    size="medium" 
                    color="primary"
                    variant="text"
                    orientation="horizontal"
                    fullWidth
                    aria-label="text button group" >

                    <Button>first</Button>
                    <Button>2nd</Button>
                    <Button>three</Button>
                </ButtonGroup>
            </Box>
            <Box>
                <Button
                    variant="contained"
                    color="primary">
                        Sign Out
                </Button>
            </Box>
        </Grid>

        </AppBar>
        </HideOnScroll>
    )
}

export default SignedInLink;