import React, { useEffect, useState } from 'react'
import { Container, Box, Button, Grid, Typography, CardContent } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import AddBoxIcon from '@material-ui/icons/AddBox'
import CameraAltIcon from '@material-ui/icons/CameraAlt'
import { createWorker } from 'tesseract.js'
import { SettingsOverscanRounded } from '@material-ui/icons'

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
            console.log("text",props.text)
            props.addTodo(props.text)
            props.setTodoText("") // clear the content after input
        } else {
            console.log("Tell user the textfield is empty!");
        }
    }

    // OCR (English Only)
    const worker = createWorker({
        logger: m => console.log(m)
    })
    const [ocr, setOcr] = useState('...')
    // FOR TEST
    // const imgLink = 'https://tesseract.projectnaptha.com/img/eng_bw.png'
    const imgLink = './eng.png'
    // const imgLink = './zh.png'
    const handleOCR = async () => {
        await worker.load()
        await worker.loadLanguage('eng')
        await worker.initialize('eng')
        const {data: { text }} = await worker.recognize(imgLink)
        setOcr(text)
    }

    useEffect(() => {
        // handleOCR();
        props.setTodoText(ocr)
    })


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
                    spacing={1}
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
                        onChange={(e)=>handleChange(e)}
                    />
                    </Grid>
                    {/* <input value={this.props.text} onChange={this.handleChange} /> */}
                    {/* <button 
                        onClick={this.handleClick}
                        >Add</button> */}
                    <Grid item xs={2}>
                        {console.log(props.text)}
                    <Button 
                        variant="outlined"
                        onClick={handleClick}
                        startIcon={<AddBoxIcon />}
                        color="primary"
                        >
                            Add
                    </Button>
                    </Grid>
                    <Button 
                        variant="outlined"
                        onClick={handleOCR}
                        startIcon={<CameraAltIcon />}
                        color="primary"
                        >
                            Read from Img
                    </Button>
                    <CardContent>{ocr}</CardContent>
                </Grid>
            </Typography>
            </Box>
            </Container>
        );
    // }


}

export default AddTodo;