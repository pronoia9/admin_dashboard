import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend, RangeColorSettingsDirective, RangeColorSettingDirective, MultiLevelLabels } from '@syncfusion/ej2-react-charts';

import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy';
import { Header } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const ColorMapping = () => {
  const { chartStyles } = useStateContext();

  return (
    <div id='color_mapping-chart-page' className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Chart' title='Color Mappping' subtitle='USA CLIMATE - WEATHER BY MONTH' />
      <div className='w-full'>
        <ChartComponent
          id='charts'
          primaryXAxis={{ ...ColorMappingPrimaryXAxis, ...chartStyles.axisStyles }}
          primaryYAxis={{ ...ColorMappingPrimaryYAxis, ...chartStyles.axisStyles }}
          chartArea={{ border: { width: 0 } }}
          legendSettings={{ ...chartStyles.legendSettings, mode: 'Range' }}
          tooltip={{ enable: true }}
          background={chartStyles.background}>
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name='USA'
              xName='x'
              yName='y'
              type='Column'
              cornerRadius={{ topLeft: 10, topRight: 10 }}
            />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) => (
              <RangeColorSettingDirective key={index} {...item} />
            ))}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default ColorMapping;