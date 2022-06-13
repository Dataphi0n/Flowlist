import { useNode } from '@craftjs/core';
import { 
  CustomLayout,
  CustomMargin,
  CustomPadding,
  CustomSize, 
  CustomTypography, 
  CustomBackground, 
  CustomBorder, 
  CustomEffect,
  CustomSelect
} from '../../CustomizeComponent/CustomPanel';


export const SelectSettings = () => {
    const {
      actions: { setProp },
      props,
    } = useNode((node) => ({
      props: node.data.props,
    }));
  
    return (
      <div>
        <CustomSelect {...props} />
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