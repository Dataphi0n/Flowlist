import React from 'react';
import { useNode } from '@craftjs/core';
import {
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
  } from '@material-ui/core';
import { CustomTextArea, CustomMargin, CustomPadding, CustomSize, CustomTypography, CustomBackground, CustomBorder, CustomEffect, CustomInput } from '../../CustomizeComponent/CustomPanel';

export const TextareaSettings = () => {
    const {
      actions: { setProp },
      props,
    } = useNode((node) => ({
      props: node.data.props,
    }));
  
    return (
      <div>
        {/* <CustomInput {...props} /> */}
        <CustomTextArea {...props} />
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