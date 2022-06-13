import { useNode } from '@craftjs/core';
import { CustomMargin, CustomPadding, CustomSize, CustomBorder, CustomEffect, CustomDatePicker, CustomTypography, CustomBackground } from '../../CustomizeComponent/CustomPanel';

export const DatePickerSetting = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div>
      <CustomDatePicker {...props} /> 
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
