import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const myTheme = createMuiTheme ({

    // color palette for header
    palette: {
        primary: {
            main: '#FFFFFF',
            contrastText: '#3A4B40',
        },
        secondary: {
            main: '#373C41',
            contrastText: '#4C8360',
        },
    },

});

export default myTheme;
