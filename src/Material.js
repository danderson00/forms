import React from 'react'
import { Form, Text, Checkbox, Radio, Select, Submit  } from '@cordelta/react-forms-material'

export default ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <Text name="name" label="Name" required />
    <Text name="description" label="Description"/>

    <Checkbox name="urgent" label="Urgent" />

    <Radio name="rating" label="Rating" numeric required row values={[1, 2, 3, 4, 5]} />

    <Select name="category" label="Category" values={['Components', 'Widgets']} required />

    {/*<DatePicker name="selectedDate" />*/}
    {/*<TimePicker name="selectedDate" />*/}
    {/*<DateTimePicker name="selectedDate" />*/}

    {/*<Slider*/}
    {/*  name="value"*/}
    {/*  aria-labelledby="discrete-slider"*/}
    {/*  valueLabelDisplay="auto"*/}
    {/*  step={10}*/}
    {/*  min={10}*/}
    {/*  max={110}*/}
    {/*/>*/}
    <Submit>Submit</Submit>
  </Form>
)