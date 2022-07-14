import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { useGlobalContext } from './context';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
function Pie3d({ data }) {
  const { repos } = useGlobalContext();
  const chartConfigs = {
    type: 'pie2d', // The chart type
    width: '100%', // Width of the chart
    height: '350', // Height of the chart
    dataFormat: 'json', // D
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Languages',
        captionFontColor: '#102a42',
        captionFontBold: 0,
        captionFontSize: 20,
        captionFont: 'Roboto',
        baseFont: 'Open Sans',
        baseFontSize: 16,
        baseFontColor: '#617d98',
        smartLineColor: '#617d98',
        showShadow: 0,
        showPlotBorder: 0,
        paletteColors:
          '#2caeba, #5D62B5, #FFC533, #F2726F, #8d6e63, #1de9b6, #6E80CA',
        use3DLighting: 0,
        useDataPlotColorForLabels: 0,
        bgColor: '#FFFFFF',
        showBorder: 0,
        decimals: 0,
        pieRadius: '45%',
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
}

export default Pie3d;
