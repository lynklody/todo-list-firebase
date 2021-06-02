// previously App.js
import React, {useEffect} from 'react'
// import AddTodo from "./component/AddTodo";
// import TodoList from "./component/TodoList";
// import Footer from "./component/Footer";
import AddTodoContainer from '../containers/AddTodoContainer'
import TodoListContainer from '../containers/TodoListContainer'
import FooterContainer from '../containers/FooterContainer'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Box, Card, CardContent, Typography, Grid } from '@material-ui/core'
import Favorite from '@material-ui/icons/Favorite'
import red from '@material-ui/core/colors/red'
import { blue } from '@material-ui/core/colors'
import CardHeader from '@material-ui/core/CardHeader'
import { useContainedCardHeaderStyles } from '@mui-treasury/styles/cardHeader/contained'
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded'
import NavigationBar from './NavigationBar'

// import {InlineWidget} from 'react-calendly'


// const todos = [
//     {
//         id: 1,
//         text: "Walk the dogs",
//         completed: true
//     },
//     {
//         id: 2,
//         text: "Buy grocery",
//         completed: false
//     },
//     {
//         id: 3,
//         text: "Cook dinner",
//         completed: true
//     },
// ]

// const filter = "all";

const useStyles = makeStyles( ({spacing}) => ({
    card: {
        marginTop: 50,
        marginBottom: 30,
        borderRadius: spacing(0.5),
        transition: '0.3s',
        width: '90%',
        overflow: 'initial',
    },
    title: {
        fontSize: 25,
        fontWeight: 800,
        textAlign: 'center',
        color: blue.A200,
        // fontFamily: "'Arial', sans-serif",
    },
    content: {
        textAlign: 'center',
        overflowX: 'auto',
    },
    button: {
        textAligh: 'center',
    }
}));

// const board = () => {
//     return(
//         <div>
//             <InlineWidget url="https://calendly.com/wendy-liu001/60min"/>
//             {/* <!-- Calendly inline widget begin --> */}
//             {/* <div class="calendly-inline-widget" data-url="https://calendly.com/wendy-liu001/60min" style="min-width:320px;height:630px;"></div> */}
//             {/* <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script> */}
//             {/* <!-- Calendly inline widget end --> */}
//         </div>
//     )
// }

const Dashboard = () => {
// class App extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         todos: [],
    //         filter: 'all'
    //     }
    //     this.nextTodoId = 0;
    // }

    // render() {
        // const todos = this.getVisibleTodos();
        // const {filter} = this.props;

        const minWidth = "320px"
        const height = "630px"
        const url = "https://calendly.com/wendy-liu001/60min"
        useEffect(() => {
            const head = document.querySelector('head');
            const script = document.createElement('script');
            script.setAttribute(
            'src',
            'https://assets.calendly.com/assets/external/widget.js'
            );
            head.appendChild(script);
        }, []);

        const classes = useStyles();
        const cardHeaderShadowStyles = useFadedShadowStyles();
        const cardHeaderStyles = useContainedCardHeaderStyles();
        // const cardShadowStyles = useSoftRiseShadowStyles({ inactive: true });
        return (
            <Container> {/**material-ui container */}
            <Grid container
                direction="column"
                justify="center"
                alignItems="center" >
            <Box display="left">
                {/* <Card> */}
                    <NavigationBar />

                {/* </Card> */}
            </Box>
            <Box 
                 display="flex"
                 marginTop={6}
                 alignItems="center"
                 justifyContent="center"
                 >
                <Card className={classes.card}>
                <Typography component={'span'}>
                {/* <Card className={classes.card}> */}
                    {/* <CardContent className={classes.title}> */}
                    {/* <CardContent>
                        <Typography component={'span'} color="primary">
                            MY TODO LIST
                        </Typography>
                    </CardContent> */}
                    <Typography component={'span'} color="primary">
                        <CardHeader
                            className={cardHeaderShadowStyles.root}
                            classes={cardHeaderStyles}
                            title={'MY TO-DO LIST'}
                            subheader={'A To-Do List Sample App'}
                        />
                    </Typography>
                    <Box>
                        {/* calenderly embed */}
                        <div
                            className="calendly-inline-widget"
                            data-url={url}
                            style={{ minWidth, height }}
                        />
                    </Box>
                    <Box display="flex" 
                    alignItems="center" 
                    justifyContent="center"
                    >

                        <AddTodoContainer />

                    </Box>
                    <Box display="flex" 
                    alignItems="center" 
                    justifyContent="center" 
                    >
                        <Typography component={'span'}>
                            <CardContent>

                                <TodoListContainer />

                            </CardContent>
                        </Typography>
                    </Box>
                    <Box display="flex" 
                    alignItems="center" 
                    justifyContent="center" 
                    >
                        <FooterContainer />

                    </Box>
                    {/* <AddTodo addTodo={this.addTodo} />
                    <TodoList todos={todos} toggleTodo={this.toggleTodo} />
                    <Footer filter={filter} setVisibilityFilter={this.setVisibilityFilter} /> */}
                    <Box  display="flex" 
                    alignItems="center" 
                    justifyContent="right" 
                    >
                        <CardContent>
                            Made by Wendy with 
                            <Favorite
                                style={{ color: red.A400 }}
                            ></Favorite>
                        </CardContent>
                    </Box>
                </Typography>
                </Card>
            </Box>
            
            </Grid>
            </Container>
        );
    // }

    // // filter todos according to conditions given
    // getVisibleTodos = () => {
    //     const currentFilter = this.state.filter;
    //     return this.state.todos.filter(item => {
    //         if (currentFilter === "active") {
    //             return !item.completed;
    //         } else if (currentFilter === "completed") {
    //             return item.completed;
    //         } else {
    //             return true;
    //         }
    //     })
    // }

    // // add a new todo element
    // addTodo = (text) => {
    //     const todo = {
    //         id: this.nextTodoId++,
    //         text,
    //         complete: false
    //     };
    //     const newTodos = [todo, ...this.state.todos];
    //     this.setState ({
    //         todos: newTodos
    //     });
    // }

    // // update todo
    // toggleTodo = id => {
    //     const newTodos = this.state.todos.map(item => {
    //         return item.id === id 
    //             ? {...item, completed : !item.completed } 
    //             : item
    //     });
    //     this.setState ({
    //         todos: newTodos
    //     })
    // }

    // setVisibilityFilter = filter => {
    //     this.setState({
    //         filter
    //     })
    // }
}

export default Dashboard;