import { useNode } from '@craftjs/core';
import { 
  CustomMargin,
  CustomPadding,
  CustomSize, 
  CustomTypography, 
  CustomBackground, 
  CustomBorder, 
  CustomEffect,
  CustomInput
} from '../../CustomizeComponent/CustomPanel';


export const InputSettings = () => {
    const {
      actions: { setProp },
      props,
    } = useNode((node) => ({
      props: node.data.props,
    }));
  
    return (
      <div>
        <CustomInput {...props} />
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