import { useNode } from '@craftjs/core';
import { CustomMargin, CustomPadding, CustomSize, CustomBorder, CustomEffect, CustomDivider, CustomTypography, CustomBackground } from '../../CustomizeComponent/CustomPanel';

export const DividerSetting = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div>
      <CustomDivider {...props} /> 
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
