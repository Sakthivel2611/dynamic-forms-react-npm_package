import React from "react";
import { Field, ErrorMessage } from 'formik';
import { TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Select, MenuItem, InputLabel } from "@mui/material";
import { FormSchema } from "../schemas/formSchema";

interface FormFieldProps {
  fieldKey: string;
  field: FormSchema[string];
}

const FormField: React.FC<FormFieldProps> = ({ fieldKey, field }) => {
  const isRequired = field.rules?.required;
  const label = isRequired ? `${field.label} *` : field.label;

  switch (field.type) {
    case "input_text":
      return (
        <div className="mb-3">
          <Field
            as={TextField}
            id={fieldKey}
            name={fieldKey}
            label={label}
            placeholder={field.placeholder}
            fullWidth
            margin="normal"
            InputLabelProps={{ className: isRequired ? 'required-label' : '' }}
          />
          <ErrorMessage name={fieldKey} component="div" className="error-message" />
        </div>
      );

    case "input_textarea":
      return (
        <div className="mb-3">
          <Field
            as={TextField}
            id={fieldKey}
            name={fieldKey}
            label={label}
            placeholder={field.placeholder}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            InputLabelProps={{ className: isRequired ? 'required-label' : '' }}
          />
          <ErrorMessage name={fieldKey} component="div" className="error-message" />
        </div>
      );

    case "input_radio":
      return (
        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend" className={isRequired ? 'required-label' : ''}>{label}</FormLabel>
          <Field name={fieldKey}>
            {({ field: { value }, form: { setFieldValue } }: { field: { value: any }, form: { setFieldValue: (field: string, value: any) => void } }) => (
              <RadioGroup
                aria-label={fieldKey}
                name={fieldKey}
                value={String(value)}
                onChange={(e) => setFieldValue(fieldKey, e.target.value)}
              >
                {Object.keys(field.values || {}).map((key) => (
                  <FormControlLabel
                    key={key}
                    value={String(field.values![key])}
                    control={<Radio />}
                    label={key}
                  />
                ))}
              </RadioGroup>
            )}
          </Field>
          <ErrorMessage name={fieldKey} component="div" className="error-message" />
        </FormControl>
      );

    case "select":
      return (
        <FormControl fullWidth margin="normal">
          <InputLabel id={`${fieldKey}-label`} className={isRequired ? 'required-label' : ''}>{label}</InputLabel>
          <Field
            as={Select}
            labelId={`${fieldKey}-label`}
            id={fieldKey}
            name={fieldKey}
            label={label}
          >
            {Object.keys(field.values || {}).map((key) => (
              <MenuItem key={key} value={field.values![key]}>
                {key}
              </MenuItem>
            ))}
          </Field>
          <ErrorMessage name={fieldKey} component="div" className="error-message" />
        </FormControl>
      );

    default:
      return null;
  }
};

export default FormField;