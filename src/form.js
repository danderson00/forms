import React from 'react'
import { wrapInput, wrapSubmit } from 'react-functional-forms'
import * as core from '@material-ui/core'
import * as pickers from '@material-ui/pickers'
import dateUtils from '@date-io/dayjs'

export const TextField = wrapInput(core.TextField, { passErrorProp: true })
export const Checkbox = wrapInput(core.Checkbox, { type: 'checkbox' })
export const Radio = wrapInput(core.Radio, { type: 'radio' })
export const Select = wrapInput(core.Select, { type: 'select' })
export const Slider = wrapInput(core.Slider, {
  valueFromEvent: (event, value) => value || 0,
  defaultValue: props => props.value || props.min || 0
})
export const Switch = wrapInput(core.Switch, { type: 'checkbox' })

export const MenuItem = core.MenuItem

export const DatePicker = wrapInput(
  props => (
    <pickers.MuiPickersUtilsProvider utils={dateUtils}>
      <pickers.DatePicker {...props} />
    </pickers.MuiPickersUtilsProvider>
  ),
  {
    valueFromEvent: value => value,
    defaultValue: new Date()
  }
)
export const TimePicker = wrapInput(
  props => (
    <pickers.MuiPickersUtilsProvider utils={dateUtils}>
      <pickers.TimePicker {...props} />
    </pickers.MuiPickersUtilsProvider>
  ),
  {
    valueFromEvent: value => value,
    defaultValue: new Date()
  }
)
export const DateTimePicker = wrapInput(
  props => (
    <pickers.MuiPickersUtilsProvider utils={dateUtils}>
      <pickers.DateTimePicker {...props} />
    </pickers.MuiPickersUtilsProvider>
  ),
  {
    valueFromEvent: value => value,
    defaultValue: new Date()
  }
)
export const Submit = wrapSubmit(core.Button)
