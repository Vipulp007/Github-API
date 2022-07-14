import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { useGlobalContext } from './context';

function Doughnut({ data }) {
  const { repos } = useGlobalContext();
  ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
  const chartConfigs = {
    type: 'doughnut2d',
    width: 500,
    height: 350,
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Most use Language',
        theme: 'fusion',
        showPercentValues: 0,
      },
      data,
    },
  };
  return <ReactFC {...chartConfigs} />;
}

export default Doughnut;
