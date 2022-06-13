import { useNode } from '@craftjs/core';
import {
    FormControl,
    FormLabel,
    TextField,TextareaAutosize, AccordionDetails, AccordionSummary, Button
  } from '@material-ui/core';
  import {OptionBox} from './styles'
  import React from 'react';
import { 
  CustomMargin, 
  CustomPadding, 
  CustomSize,
  CustomTypography, 
  CustomBackground, 
  CustomBorder, 
  CustomEffect, 
  CustomAccordion 
} from '../../CustomizeComponent/CustomPanel';

export const AccordionSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div>
      {/* <CustomAccordion {...props} /> */}
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
