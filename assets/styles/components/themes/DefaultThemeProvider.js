import React from 'react';
import {createMuiTheme, CssBaseline, MuiThemeProvider, responsiveFontSizes} from "@material-ui/core";
import {indigo, green} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: indigo['500'],
            light: indigo['200'],
        },
            light: indigo[100],
        },
});

const responsiveTheme = responsiveFontSizes(theme);

const DefaultThemeProvider = (props) => {
    return (
            <MuiThemeProvider theme={responsiveTheme}>
                <CssBaseline />
                {props.children}
            </MuiThemeProvider>

    );
};

export default DefaultThemeProvider;