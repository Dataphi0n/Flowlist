import React from 'react'
import { Input, Button } from 'antd';
import { useNode } from '@craftjs/core';

export const ToolbarSelect = ({ label, onChange, propKey, index }: any) => {
  const {
    actions: { setProp },
    optionData
  } = useNode((node) => ({
    props: node.data.props,
    optionData: node.data.props.optionData,
  }));
  return (
    <div style={{ width: '100%' }}>
      {label ? (
        <div style={{ color: '#808080', textAlign: propKey == 'borderRadius' ? 'center' : 'left' }}>{label}</div>
      ) : null}
      {optionData.map((item: any, index: any) => {
        return (
          <div style={{ width: '100%' }}>
            <Input style={{ marginBottom: '5px' }}
              defaultValue={optionData[index].value}
              placeholder="Enter Value"
              onChange={(e: any) => {
                setProp((props: any) => {
                  props[propKey][index].value = onChange ? onChange(e.target.value) : e.target.value;
                }, 500);
              }}
            />
            <Input style={{ marginBottom: '30px' }}
              defaultValue={optionData[index].label}
              placeholder="Enter Label"
              onChange={(e: any) => {
                setProp((props: any) => {
                  props[propKey][index].label = onChange ? onChange(e.target.value) : e.target.value;
                }, 500);
              }}
            />
          </div>
        )
      })}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          type="primary"
          onClick={() => {
            const tempoptionData: any = [...optionData]
            tempoptionData.push({ value: "", label: "" })
            setProp((props: any) => (props.optionData = tempoptionData))
          }}>Add</Button>
      </div>
    </div>
  )
}