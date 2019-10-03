import React from 'react'
import { Form, Input, Textarea, Select, Submit, wrapInput } from '@cordelta/react-forms'
import './Simple.css'

const InputField = wrapInput(({ label, className, ...inputProps }) =>
  <div className={className}>
    <label>{label}</label>
    <input {...inputProps} />
  </div>
)

export default ({ onSubmit, onCancel, initialValues }) => (
  <Form onSubmit={onSubmit} values={initialValues}>
    <label>Name</label>
    <Input name="name" required minLength="5" maxLength="50" />

    <InputField name="code" label="Code" required maxLength="3" />
    <InputField name="private" label="Private" type="checkbox" />

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
