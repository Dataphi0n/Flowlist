import React from 'react'
import { useNode } from '@craftjs/core';
import { Slider, FormControl, FormLabel } from '@material-ui/core';
import ColorPicker from 'material-ui-color-picker';
import { CustomMargin, CustomPadding, CustomSize, CustomTypography, CustomBackground, CustomBorder, CustomEffect, CustomLayout, CustomForm } from '../../CustomizeComponent/CustomPanel';


export const FormSettings = () => {
    const {
      background,
      padding,
      props,
      actions: { setProp },
    } = useNode((node) => ({
      background: node.data.props.background,
      padding: node.data.props.padding,
      props: node.data.props,
    }));
  
    return (
      <div>
        <CustomLayout {...props} />
        <CustomForm {...props} />
        <CustomMargin {...props} />
        <CustomPadding {...props} />
        <CustomSize {...props} />
        <CustomTypography {...props} />
        <CustomBackground {...props} />
        <CustomBorder {...props} />
        <CustomEffect {...props} />
      </div>
    );
  };