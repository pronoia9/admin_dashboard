import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

import { Header } from '../components';

const change = (args) => { document.getElementById('preview').style.backgroundColor = args.currentValue.hex; };
const CustomColorPicker = ({ id, mode }) => <ColorPickerComponent id={id} mode={mode} modeSwitcher={false} inline showButtons={false} change={change} />;

const ColorPicker = () => (
  <div id='color_picker-page' className='m-2 md:m-10 mt-24 p-2 md:p-10 dark:bg-secondary-dark-bg bg-white rounded-3xl'>
    <Header category='App' title='Color Picker' />
    <div className='text-center'>
      {/* pen */}
      <div id='preview' />
      <div className='flex justify-center items-center gap-20 flex-wrap'>
        <div id='inline-pallet'>
          <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallete</p>
          <CustomColorPicker id='inline-palette' mode='Palette' />
        </div>
        <div id='inline-picker'>
          <p id='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
          <CustomColorPicker id='inline-picker' mode='Picker' />
        </div>
      </div>
    </div>
  </div>
);

export default ColorPicker;