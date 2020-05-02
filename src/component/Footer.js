import React, { Component } from 'react';
import { Container, Box, Button, Grid } from '@material-ui/core'
// import filter from "../App";

const Footer = (props) => {
// class Footer extends Component {
    // render() {
        const { filter, setFilter: setVisibilityFilter } = props;
        // So here's a smart trick:
        // renamed setVisibilityFilter to setFilter in order to keep the original func name below
        return (
        <Container>
            <Box 
                // display="flex" 
                marginBottom={10}
                alignItems="center" 
                justifyContent="center"
                >
                <Grid 
                    container 
                    direction="row"
                    justify="center"
                    alignItems="center"
                    >
                    <Grid item>
                        <Button disabled={filter === "all"}
                            onClick={
                                () => setVisibilityFilter("all")
                            }
                            color="primary"
                            variant="outlined"
                        >
                            All
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button disabled={filter === "active"}
                            onClick={
                                () => setVisibilityFilter("active")
                            }
                            color="primary"
                            variant="outlined"
                        >
                            Active
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button disabled={filter === "completed"}
                            onClick={
                                () => setVisibilityFilter("completed")
                            }
                            color="primary"
                            variant="outlined"
                        >
                            Completed
                        </Button>
                    </Grid>

                    {/* <button disabled={filter === "all"}
                        onClick={
                            () => setVisibilityFilter("all")
                        }
                    >All</button>
                    <button disabled={filter === "active"}
                        onClick={
                            () => setVisibilityFilter("active")
                        }
                    >Active</button>
                    <button disabled={filter === "completed"}
                        onClick={
                            () => setVisibilityFilter("completed")
                        }
                    >Completed</button> */}
                </Grid>
            </Box> 
        </Container>
        );
    // }
}

export default Footer;