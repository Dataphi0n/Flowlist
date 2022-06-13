import { useNode } from '@craftjs/core';
import { CustomMargin, CustomPadding, CustomSize, CustomTypography, CustomBackground, CustomBorder, CustomEffect, CustomLink, CustomPopover } from '../../CustomizeComponent/CustomPanel';

export const PopoverSetting = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div>
      <CustomPopover {...props} />
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