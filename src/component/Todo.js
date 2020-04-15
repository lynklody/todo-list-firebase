import React, { Component } from 'react';
import { CardContent, Grid, Container } from '@material-ui/core';

class Todo extends Component {
    render() {
        const {completed, text, onClick } = this.props;
        return (
            <Container>
            <CardContent>
                <Grid>
                    <li
                        onClick={onClick}
                        style={{
                            textDecoration: completed ? "line-through" : "none"
                    }}
                    >
                        {text}
                    </li>
                </Grid>
            </CardContent>
            </Container>
        );
    }
}

export default Todo;