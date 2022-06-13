import React from 'react'
import { useNode } from '@craftjs/core';
import { Slider, FormControl,TextField,Button, FormLabel } from '@material-ui/core';
import ColorPicker from 'material-ui-color-picker';
import { CustomMargin, CustomPadding, CustomSize, CustomTypography, CustomRadio } from '../../CustomizeComponent/CustomPanel';
import {ItemsContainer} from '../style'
import {PlusCircleOutlined} from '@ant-design/icons'

export const RadioButtonSettings = () => {
  const {
    background,
    padding,
    props,
    optionData,
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
    props: node.data.props,
    optionData: node.data.props.optionData,
  }));
  
    return (
      <div>
        <CustomRadio {...props} />
        <CustomMargin {...props} />
        <CustomPadding {...props} />
        <CustomSize {...props} />
        <CustomTypography {...props} />
      </div>
    );
  };