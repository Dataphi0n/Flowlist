import React from 'react'
import { useNode } from '@craftjs/core';
import { Slider, FormControl, FormLabel } from '@material-ui/core';
import { CustomMargin, CustomPadding, CustomSize, CustomTypography, CustomBackground, CustomBorder, CustomEffect } from '../../CustomizeComponent/CustomPanel';
export const TextSettings = () => {
    const {
        actions: { setProp },
        fontSize,
        props,
      } = useNode((node) => ({
        props: node.data.props,
        text: node.data.props.text,
        fontSize: node.data.props.fontSize,
      }));
  return (
    <>
      <CustomMargin {...props} />
      <CustomPadding {...props} />
      <CustomSize {...props} />
      <CustomTypography {...props} />
      <CustomBackground {...props} />
      <CustomBorder {...props} />
      <CustomEffect {...props} />
    </>
  )
}