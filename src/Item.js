import React from 'react'
import { Form } from 'react-functional-forms'
import { TextField, Button, Slider } from './formComponents'
// import { Slider } from '@material-ui/core'

export default ({ onSubmit }) => (
  <Form>
    <TextField name="name" label="Name" required error />
    <TextField name="description" label="Description"/>
    <Slider
      name="value"
      aria-labelledby="discrete-slider"
      valueLabelDisplay="auto"
      step={10}
      min={10}
      max={110}
    />
    <Button onSubmit={onSubmit}>Submit</Button>
  </Form>
)