import React from 'react'
import { Form } from 'react-functional-forms'
import { Checkbox, DatePicker, DateTimePicker, MenuItem, Radio, Select, Slider, Submit, Switch, TextField, TimePicker } from './form'

export default ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <TextField name="name" label="Name" required />
    <TextField name="description" label="Description"/>

    <Checkbox name="urgent" />
    <Switch name="reallyUrgent" />

    <Radio name="rating" numeric value="1" checked />
    <Radio name="rating" numeric value="2" />
    <Radio name="rating" numeric value="3" />

    <Select name="type" value="widget">
      <MenuItem value="widget">Widget</MenuItem>
      <MenuItem value="component">Component</MenuItem>
    </Select>

    <DatePicker name="selectedDate" />
    <TimePicker name="selectedDate" />
    <DateTimePicker name="selectedDate" />

    <Slider
      name="value"
      aria-labelledby="discrete-slider"
      valueLabelDisplay="auto"
      step={10}
      min={10}
      max={110}
    />
    <Submit>Submit</Submit>
  </Form>
)