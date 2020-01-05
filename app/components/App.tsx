import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "../_store";
import Nav from './Nav';
import Content from './Content';

import {
    createStyles,
    makeStyles,
    withStyles
} from '@material-ui/core/styles';

const globalTheme = {
    body: {
        background: '#37474f',
        color: '#a1abaf'
    }
}

const GlobalCss = withStyles({
    '@global': globalTheme,
})(() => null);

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            background: '#37474f',
        }
    })
);

const App: React.SFC = () => {
    const classes = useStyles("")
    return (
        <React.Fragment>
            <GlobalCss />
            <div className={classes.root}>
                <Nav />
                <Content />
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = (state: AppState) => ({
});

export default connect(
    mapStateToProps,
    {}
)(App);
