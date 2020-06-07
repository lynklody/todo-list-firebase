import { createMuiTheme } from '@material-ui/core/styles'
import { blue, red, indigo, pink, orange, green } from '@material-ui/core/colors'

const theme = createMuiTheme({
    typography: {
        fontFamily: "Arial",
        fontSize: 12,
        fontWeight: 800,
        // card: {
        //     fontSize: '2rem',
        //     fontWeight: 800,
        //     marginTop: 50,
        // },
        button: {
            fontSize: 14,
            fontWeight: 600,
        },
        // textfield: {
        //     fontSize: 10,
        //     fontWeight: 500,
        // }
    },
    palette: {
        primary: {
            main: blue[800],
        },
        secondary: pink,
        error: {
            main: red[300],
        },
        warning: {
            main: orange[300],
        },
        success: green,
        background: {
            default: indigo[50],
        },
    },

    // spreadThis: {
    //     customError: {
    //         color: "red",
    //         fontSize: "0.8rem",
    //         marginTop: 5
    //     },
    // }
})

export default theme;