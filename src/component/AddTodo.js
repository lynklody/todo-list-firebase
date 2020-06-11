import React from 'react'
import { Container, Box, Button, Grid, Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import AddBoxIcon from '@material-ui/icons/AddBox'


const AddTodo = (props) => {
// class AddTodo extends Component {
// const AddTodo = () => {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         text: '',
    //     }
    // }

    // render() {
    //     return (
    //         <div>
    //             <input value={this.state.text} 
    //                 onChange={this.handleChange} 
    //                 />
    //             <button 
    //                 onClick={this.handleClick}
    //                 >Add</button>
    //         </div>
    //     );
    // }
    const handleChange = (e) => {
        props.setTodoText(e.target.value)
    }
    
    const handleClick = () => {
        if (props.text !== "") {
            props.addTodo(props.text)
            props.setTodoText("") // clear the content after input
        } else {
            console.log("Tell user the textfield is empty!");
        }
    }

    // render() {
        return (
            <Container>
            <Box 
                // display="flex"
                marginTop={5}
                // marginLeft={5}
                // marginRight={5}
                justifyContent="center"
            >
            <Typography component={'span'} color="primary">
                <Grid 
                    container 
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                    >
                    <Grid item xs={8}>
                        {/* <FormRow /> */}
                    <TextField
                        id="outlined-textarea"
                        label="ENTER NEXT ITEM"
                        placeholder='Press "Enter" for multi-line input'
                        multiline
                        size="medium"
                        variant="outlined"
                        autoFocus
                        fullWidth
                        // width="80%"
                        rows={2}
                        margin="normal"
                        value={props.text}
                        onChange={handleChange}
                    />
                    </Grid>
                    {/* <input value={this.props.text} onChange={this.handleChange} /> */}
                    {/* <button 
                        onClick={this.handleClick}
                        >Add</button> */}
                    <Grid item xs={2}>
                    <Button 
                        variant="outlined"
                        onClick={handleClick}
                        startIcon={<AddBoxIcon />}
                        color="primary"
                        >
                            Add
                    </Button>
                    </Grid>
                </Grid>
            </Typography>
            </Box>
            </Container>
        );
    // }


}

export default AddTodo;