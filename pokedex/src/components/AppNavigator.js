import { AppBar, makeStyles, Toolbar, Typography, Link } from "@material-ui/core";
import React from "react";



const  useStyles = makeStyles((theme) => ({
    AppBar:{
        backgroundColor: "black"
    },
    link:{
        textDecoration: "none"
    },
    title:{
        cursor: "pointer",
        color: "white"
    }
}))
export default function AppNavigator(){
    const classes = useStyles()
    return(
        <AppBar className={classes.AppBar} postition="fixed">
            <Toolbar>
                <Link to="/" className={classes.link}>
                    <Typography className={classes.title}>Pokedex</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}