import React from 'react'
import { MaterialDatePicker, DatePickerParent, MaterialRangePicker } from './Style'
import { useNode, useEditor } from "@craftjs/core";
import { DatePickerSetting } from './Settings';
import { Form } from 'antd';

export const DatePicker = (props: any) => {
  const { connectors: { connect, drag } } = useNode();
  const { enabled }: any = useEditor((state, query) => ({
    enabled: state.options.enabled,
  }));
  const {
    name,
    label,
    required,
    errorMessage,
    picker,
    showtime,
    rangepicker
  } = props
  return (
    <DatePickerParent {...props}
      ref={(ref: any) => {
        if (enabled) {
          connect(drag(ref))
        }
      }}
    >
      <Form.Item
        name={name}
        label={label}
        rules={[
          {
            required: required,
            message: errorMessage
          }
        ]}
      >
        {rangepicker ?
          <MaterialRangePicker
            {...props}
            picker={picker}
            showTime={showtime}
          /> :
          <MaterialDatePicker
            {...props}
            picker={picker}
            showTime={showtime}
          />
        }
      </Form.Item>
    </DatePickerParent>
  )
}

export const DatePickerDefaultProps = {
  margin: ['0px', '0px', '0px', '0px'],
  padding: ['0px', '0px', '0px', '0px'],
  borderRadius: ['0px', '0px', '0px', '0px'],
  borderWidth: ['1px', '1px', '1px', '1px'],
  width: '100%',
  height: "40px",
  picker: 'date',
  showTime: 'false'

};

DatePicker.craft = {
  props: DatePickerDefaultProps,
  related: {
    settings: DatePickerSetting,
  },
};