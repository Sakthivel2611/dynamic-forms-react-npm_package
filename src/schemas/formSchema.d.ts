export interface FormSchema {
  [key: string]: {
    type: string;
    label: string;
    placeholder?: string;
    default?: string | number;
    values?: { [key: string]: string | number };
    rules?: {
      required: boolean;
      min?: number;
      max?: number;
      datatype?: string;
    };
    lang?: {
      [key: string]: {
        label: string;
        placeholder: string;
      };
    };
    minyear?: number;
    format?: string;
  };
}