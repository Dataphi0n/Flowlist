import { useNode } from '@craftjs/core';
import { 
  CustomSwitch, CustomTypography, CustomBorder, CustomMargin, CustomPadding, CustomSize
} from '../../CustomizeComponent/CustomPanel';


export const SwitchSettings = () => {
    const {
      actions: { setProp },
      props,
    } = useNode((node) => ({
      props: node.data.props,
    }));
  
    return (
      <div>
        <CustomSwitch {...props} />
        <CustomMargin {...props} />
        <CustomPadding {...props} />
        <CustomSize {...props} />
        <CustomTypography {...props} />
        <CustomBorder {...props} />
      </div>
    );
  };