import React from 'react';
import { Grid } from '@material-ui/core';
import { useEditor } from "@craftjs/core";
import { Toolbox } from '../components/toolbox/Toolbox';
import { SettingsPanel } from '../components/SettingsPanel';
import { GridWrapper } from './styles'
import ViewPort from '../components/ViewPort'
import lz from "lzutf8";
import { Context } from '../Context'
import axios from 'axios';
import { constants } from '../constants';

const Builder = (props: any) => {
  const urlParams = new URLSearchParams(window.location.search);
  const nodeid = urlParams.get('id');
  const [layeraccordion, setLayeraccordion]: any = React.useState(false)
  const [customaccordion, setCustomaccordion]: any = React.useState(false)
  const contextValues: any = React.useContext(Context)
  const { enabled, actions } = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));

  React.useEffect(() => {
    if (window.location.pathname.includes("/component")) {
      let newNodeData = contextValues.elements.find((d: any) => d.id == nodeid)
      if (newNodeData !== undefined) {
        if (newNodeData?.nodeData !== null) {
          actions.deserialize(lz.decompress(lz.decodeBase64(newNodeData.nodeData)));
          props.setNodeJSON(lz.decompress(lz.decodeBase64(newNodeData.nodeData)))
        }
      }
    }
    if (window.location.pathname.includes("/properties")) {
      let newNodeData = contextValues.elements.find((d: any) => d.id == nodeid)
      if (newNodeData !== undefined) {
        if (newNodeData?.attributeData !== null) {
          actions.deserialize(lz.decompress(lz.decodeBase64(newNodeData.attributeData)));
          props.setNodeJSON(lz.decompress(lz.decodeBase64(newNodeData.nodeData)))
        }
      }
    }
  }, [contextValues.elements])
  return (
    <div style={{ overflowX: "hidden" }}>
      <GridWrapper container spacing={0}>
        {enabled ? (
          <Grid item xs={2}>
            <Toolbox {...props} />
          </Grid>
        ) : null}
        <Grid style={{ height: "100vh" }} item xs={enabled ? 7 : 12}>
          <ViewPort {...props} />
        </Grid>
        {enabled ? (
          <Grid item xs={3}>
            <SettingsPanel {...props} layeraccordion={layeraccordion} setlayeraccordion={setLayeraccordion} customaccordion={customaccordion} setcustomaccordion={setCustomaccordion} />
          </Grid>
        ) : null}
      </GridWrapper>
    </div>
  );
}

export default Builder
