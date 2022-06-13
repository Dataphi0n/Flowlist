import { useNode } from '@craftjs/core';
import {
    CustomMargin,
    CustomPadding,
    CustomSize,
    CustomSegmented
} from '../../CustomizeComponent/CustomPanel';


export const SegmentedSettings = () => {
    const {
        props,
    } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <div>
            <CustomSegmented {...props} />
            <CustomMargin {...props} />
            <CustomPadding {...props} />
            <CustomSize {...props} />
            {/* <CustomTypography {...props} /> */}
            {/* <CustomBackground {...props} /> */}
            {/* <CustomBorder {...props} /> */}
            {/* <CustomEffect {...props} /> */}
        </div>
    );
};