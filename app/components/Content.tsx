import * as React from "react";
import { Fragment } from "react";
import { connect } from 'react-redux';
import Metrics from './screens/Metrics';
import Dashboard from './screens/Dashboard'
import Alerts from './screens/Alerts'
import Settings from './screens/Settings'
import Build from './screens/Build'

const Content = ({ ...props }) => {
    console.log(props.screen)
    let Screen = () => {
        switch (props.screen) {
            case 'metrics':
                return <Metrics />;
            case 'dashboard':
                return <Dashboard />;
            case 'alerts':
                return <Alerts />;
            case 'build':
                return <Build />;
            case 'settings':
                return <Settings />;
            default:
                return <Metrics />;
                break;
        };
    }
    return (
        <Fragment>
            <Screen />
        </Fragment>
    );
}

const mapState = (state: any) => ({
    screen: state.content.screen.screen
})


const connectedContent = connect(mapState)(Content);
export default connectedContent;