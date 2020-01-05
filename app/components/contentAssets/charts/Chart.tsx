import * as React from "react";
import { Component, Fragment } from "react";
import { useEffect, useState } from 'react';
import * as d3 from 'd3';
import { createStyles, makeStyles, useTheme, Theme, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import node from './ChartD3.js'
import rd3 from 'react-d3-library';
import Dygraph from 'dygraphs'
import jss from 'jss'

const RD3Component = rd3.Component;


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            background: '#37474f',
            color: 'f0ece2',
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        chart1: {
            
        }
    }),
);

export default ({ ...props }) => {
    const classes = useStyles("");
    useEffect(() => {
        new Dygraph(

            // containing div
            document.getElementById("graphdiv" + props.appElementId),

            // CSV or path to a CSV file.
            "Date,Temperature\n" +
            "2008-05-07,75\n" +
            "2009-05-08,10\n" +
            "2010-05-09,20\n" +
            "2011-05-10,15\n" +
            "2012-05-11,90\n" +
            "2013-05-12,80\n" +
            "2014-05-13,75\n" +
            "2015-05-14,70\n" +
            "2016-05-15,80\n",
            {
                title: 'Nightly Temperatures in New York vs. San Francisco',
                ylabel: 'Temperature (F)',
                legend: 'always',
                showRangeSelector: true,
                rangeSelectorPlotFillColor: 'MediumSlateBlue',
                rangeSelectorPlotFillGradientColor: 'black'
            }
        );
    })

    return (
        <Fragment>
            <div id={"graphdiv"+props.appElementId} style={{ "width": "50%", "height": "280px", "minWidth": "400px" }}></div>
        </Fragment>
    );
}