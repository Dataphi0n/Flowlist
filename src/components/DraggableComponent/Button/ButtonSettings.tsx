import React from 'react';
import { useNode } from '@craftjs/core';
import {
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
  } from '@material-ui/core';
import { CustomMargin, CustomPadding, CustomSize, CustomTypography, CustomBackground, CustomBorder, CustomEffect } from '../../CustomizeComponent/CustomPanel';

export const ButtonSettings = () => {
    const {
      actions: { setProp },
      props,
    } = useNode((node) => ({
      props: node.data.props,
    }));
  
    return (
      <div>
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