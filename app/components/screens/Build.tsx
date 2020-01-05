import * as React from "react";
import { connect } from "react-redux";
import { AppState } from "../../_store";
import { createStyles, makeStyles, useTheme, Theme, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Chart from '../contentAssets/charts/Chart';
import ChartD3Line from '../contentAssets/d3/lineChartA';
import Typography from '@material-ui/core/Typography';




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

const Metrics = () => {
    const classes = useStyles("");
    return (
        <main className={classes.content}>
            <div className={classes.spacer} />
            <Typography>Build</Typography>
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
    {  }
  )(Metrics);
  