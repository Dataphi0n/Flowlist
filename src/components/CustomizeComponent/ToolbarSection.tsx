import { useNode } from '@craftjs/core';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './BoxSettingStyle.scss'
import { makeStyles } from '@material-ui/core/styles';
const { Panel } :any = Collapse;
const usePanelStyles = makeStyles((_) => ({
  root: {
    background: 'transparent',
    boxShadow: 'none',
    '&:before': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
    '&.Mui-expanded': {
      margin: '0 0',
      minHeight: '40px',
      '&:before': {
        opacity: '1',
      },
      '& + .MuiExpansionPanel-root:before ': {
        display: 'block',
      },
    },
  },
}));

const useSummaryStyles = makeStyles((_) => ({
  root: {
    'min-height': '36px',
    padding: 0,
  },
  content: {
    margin: '0px',
  },
}));

export const ToolbarSection = ({ title, props, summary, children }: any) => {
  const panelClasses = usePanelStyles({});
  const summaryClasses = useSummaryStyles({});
  const { nodeProps } = useNode((node) => ({
    nodeProps:
      props &&
      props.reduce((res: any, key: any) => {
        res[key] = node.data.props[key] || null;
        return res;
      }, {}),
  }));
  return (
    <Collapse
      bordered={false}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      className="site-collapse-custom-collapse"
    >
      <Panel header={title} key="1" className="site-collapse-custom-panel">
        {children}
      </Panel>
    </Collapse>
  );
};
