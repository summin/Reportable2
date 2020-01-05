import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "../../_store";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Chart from '../contentAssets/charts/Chart';
import Typography from '@material-ui/core/Typography';
import { setNavButtons } from '../../_store/content/actions'





const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            background: '#37474f',
        },
        spacer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        },
        content: {
            background: '#37474f',
            color: 'f0ece2',
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        dashboard1: {
            display: "flex",
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
        },
        ph: {
            width: 'calc(100vw-100px)',
        }
        
    }),
);

const Metrics = ({...props }) => {
    const classes = useStyles("");
    props.setNavButtons(["Metr1", "Metr2", "XYZ"])
    return (
        <main className={classes.content}>
            <div className={classes.spacer} />
            <Typography>Metrics</Typography>
            <div className={classes.dashboard1}>
            <Chart className={classes.ph} appElementId = {1}/>
            <Chart className={classes.ph} appElementId = {2}/>
            </div>
            <div className={classes.dashboard1}>
        </div>
        </main>
    );

}

const mapStateToProps = (state: AppState) => ({
    data: state.data,
    api: state.api
  });
  
export default connect(
    mapStateToProps,
    { setNavButtons }
  )(Metrics);
  