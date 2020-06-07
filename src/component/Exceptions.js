import React from 'react'
import { CardContent, Container, Box, Typography } from '@material-ui/core'

export const Loading = () => {
    return (
        <Container>
            <CardContent>
                Loading...
            </CardContent>
        </Container>
    )
}

export const EmptyList = () => {
    return (
        <Container>
            <CardContent>
                <Box 
                display="flex"
                marginTop={2}
                alignItems="center"
                justifyContent="center"
                >
                    <Typography color='error'>
                        No To-do item... <br/>
                        You might also get this message because your network does not have access to Google.com.
                        Please check your network settings.
                    </Typography>
                </Box>
            </CardContent>
        </Container>
    )
}

export const EmptyFilter = () => {
    return (
        <Container>
            <CardContent>
                <Box 
                display="flex"
                marginTop={2}
                alignItems="center"
                justifyContent="center"
                >
                    <Typography color='error'>
                        Warning: You might not be able to filter todo items!
                        Please contact the admin.
                        EMAIL: email
                    </Typography>
                </Box>
            </CardContent>
        </Container>
    )
}