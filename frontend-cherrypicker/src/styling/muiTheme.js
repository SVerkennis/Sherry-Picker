import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const myTheme = createMuiTheme ({

    // color palette for header
    palette: {
        primary: {
            main: '#FFFFFF',
            contrastText: '#3A4B40',
            light: '#E46A6A',
            dark: '#80E3AD',
        },
        secondary: {
            main: '#373C41',
            light: '#2ECC71',
            dark: '#00B388',
            contrastText: '#4C8360',
        },
        tertiary: {
            //for later
            main: 'white',
        },
        error: {
            main: '#FFFFFF',
            // light wird noch nicht genutzt
            light: '#798897',
        }
    },

});

export default myTheme;
