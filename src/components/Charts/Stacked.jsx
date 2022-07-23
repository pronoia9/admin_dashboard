import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip} from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Stacked = ({ width, height }) => {
  const { currentMode, currentColor } = useStateContext();

  // color customization
  const palette = [currentColor, `${currentMode === 'Dark' ? '#555' : '#404041'}`];
  const background = currentMode === 'Dark' ? '#33373E' : '#fff';
  const font = { color: `${currentMode === 'Dark' ? '#fff' : '#33373E'}` };

  return (
    <ChartComponent
      id='charts'
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={background}
      palettes={palette}
      legendSettings={{
        background: background,
        textStyle: font,
      }}
      loaded={() => {
        let chart = document.getElementById('charts');
        let legendSvg = chart.querySelectorAll('[id*="chart_legend_shape_"]');
        for (let i = 0; i < legendSvg.length; i++) {
          // change the legends icon/shape as soon as theme color changes
          legendSvg[i].setAttribute('stroke', palette[i]);
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