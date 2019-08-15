import React from 'react'
import { Form, Input, Textarea, Select, Submit } from 'react-functional-forms'
import './Simple.css'

export default ({ onSubmit, onCancel, initialValues }) => (
  <Form onSubmit={onSubmit} values={initialValues}>
    <label>Name</label>
    <Input name="name" required minLength="5" maxLength="50" />

    <label>Description</label>
    <Textarea name="description" maxLength="100" />

    <label>Type</label>
    <Select name="type" options={['', 'Widget', 'Component']} required />

    <label>Rating</label>
    <div>
      <Input name="rating" type="radio" numeric value="1" checked />
      <Input name="rating" type="radio" numeric value="2" />
      <Input name="rating" type="radio" numeric value="3" />
    </div>

    <label>Urgent</label>
    <Input name="urgent" type="checkbox" />

    <div>
      <Submit>Submit</Submit>
      <button onClick={onCancel}>Cancel</button>
    </div>
  </Form>
)
