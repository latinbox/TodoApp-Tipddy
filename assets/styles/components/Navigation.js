import React, {useState} from 'react';

//MUI components
import {
    AppBar,
    Toolbar,
    IconButton,
    Link,
    Box,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    makeStyles,
} from "@material-ui/core";

// MUI icons
import { Menu as MenuIcon, List as ListIcon, Label as LabelIcon} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({

}));
const Navigation = () => {
    const classes = useStyles();
    // state
    const [drawerOpen, setDrawerOpen] = useState(false);
    // functions
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };
    const drawerItems = [
        {text: 'TodoList', icon: <ListIcon/>},
        {text: 'Tags', icon: <ListIcon/>},
    ];

    return (
        <div>
            <AppBar>
                <Toolbar>

                </Toolbar>
            </AppBar>

        </div>
    );
};

export default Navigation;