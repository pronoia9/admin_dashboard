import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip} from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Stacked = ({ width, height }) => {
  const { chartStyles } = useStateContext();

  return (
    <ChartComponent
      id='charts'
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={chartStyles.background}
      palettes={chartStyles.palette}
      legendSettings={chartStyles.legendSettings}
      loaded={() => {
        let chart = document.getElementById('charts');
        let legendShape = chart.querySelectorAll('[id*="chart_legend_shape_"]');
        for (let i = 0; i < legendShape.length; i++) {
          legendShape[i].setAttribute('fill', chartStyles.palette[i]);
          legendShape[i].setAttribute('stroke', chartStyles.palette[i]);
        }
      }}>
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;

// Resources:
// https://ej2.syncfusion.com/react/documentation/chart/legend/#set-the-label-color-based-on-series-color
// https://stackoverflow.com/questions/56655390/how-to-change-color-of-svg-circle