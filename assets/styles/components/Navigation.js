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
menuIcon: {
    marginRight: theme.spacing(2),
},
    list: {
    width: '200px',
    }
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
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton onClick={toggleDrawer} className={classes.menuIcon} edge="start"><MenuIcon/></IconButton>
                    <Link href="/" variant="h6" color="textPrimary" underline="none">Tipddy-TodoApp</Link>
                    <Box flexGrow={1}/>
                    <Button size="large">Login</Button>
                </Toolbar>
                <Drawer variant="temporary" onClose={toggleDrawer} open={drawerOpen}>
                    <List className={classes.list} >
                        {drawerItems.map(prop => (
                            <ListItem onClick={toggleDrawer} button key={prop.text}>
                                <ListItemIcon>{prop.icon}</ListItemIcon>
                                <ListItemText>{prop.text}</ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </AppBar>

        </div>
    );
};

export default Navigation;