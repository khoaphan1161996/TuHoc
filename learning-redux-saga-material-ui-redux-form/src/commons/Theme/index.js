import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        // primary: {
        //     main: '#D32F2F'
        // },
        secondary: {
            main: '#00BCD4'
        },
        error: {
            main: '#E64A19'
        }
    },
    typography: {
        fontFamily: 'Roboto'
    },
    shape: {
        borderRadius:4,
        backgroundColor: '#7B1FA2',
        textColor: '#ffffff',
        border: '#cccccc'
    }
})

export default theme