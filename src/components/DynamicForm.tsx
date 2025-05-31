import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import formSchema from '../schemas/formSchema.json';
import FormField from './FormField';
import { FormSchema } from '../schemas/formSchema';
import { Container, Button, Typography } from '@mui/material';
import axios from 'axios';

const schema: FormSchema = formSchema;

const validationSchema = Yup.object().shape(
  Object.keys(schema).reduce((acc: { [key: string]: any }, key) => {
    const field = schema[key];
    if (field.rules) {
      let validator = Yup.string();
      if (field.rules.required) {
        validator = validator.required('This field is required');
      }
      if (field.rules.min !== undefined) {
        validator = validator.min(field.rules.min, `Minimum ${field.rules.min} characters`);
      }
      if (field.rules.max !== undefined) {
        validator = validator.max(field.rules.max, `Maximum ${field.rules.max} characters`);
      }
      if (field.rules.datatype === 'email') {
        validator = validator.email('Invalid email format');
      }
      acc[key] = validator;
    }
    return acc;
  }, {})
);

const DynamicForm: React.FC = () => {
  const initialValues = Object.keys(schema).reduce((acc: { [key: string]: string }, key) => {
    acc[key] = String(schema[key].default || '');
    return acc;
  }, {});

  const handleSubmit = async (values: any) => {
    try {
      const response = await axios.post('/api/submit', values);
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Student Create Form
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            {Object.keys(schema).map((key) => (
              <FormField key={key} fieldKey={key} field={schema[key]} />
            ))}
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default DynamicForm;