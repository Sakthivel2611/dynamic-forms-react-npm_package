# 🌟 dynamic-forms-react-npm_package

[![NPM Version](https://img.shields.io/npm/v/dynamic-forms-react-npm_package.svg?style=flat-square)](https://www.npmjs.com/package/dynamic-forms-react-npm_package)

A **highly customizable** and **reusable dynamic form component** for React. It generates beautiful forms from JSON schema and supports validations, layout control, and styled-components out of the box.

---

## 📦 NPM Package

🔗 [dynamic-forms-react-npm_package on npm]((https://www.npmjs.com/package/npm-builder-forms))

```bash
npm install dynamic-forms-react-npm_package
🚀 Features
📄 Generate forms from JSON schema

🧠 Built-in field validation

🧱 Supports input types: text, number, email, select, radio, checkbox, textarea, date

🔁 Wizard (multi-step) and single-form modes

🎨 Customizable with styled-components

⚛️ Fully typed with TypeScript

🧩 Easy to integrate into any React project
import React from 'react';
import { DynamicForm } from 'dynamic-forms-react-npm_package';

const schema = {
  title: "User Info",
  layout: "single", // or "wizard"
  fields: [
    { type: "text", label: "Name", name: "name", required: true },
    { type: "email", label: "Email", name: "email", required: true },
    { type: "select", label: "Country", name: "country", options: ["India", "USA", "UK"] },
    { type: "checkbox", label: "Subscribe to newsletter", name: "subscribe" }
  ]
};

export default function App() {
  return (
    <DynamicForm
      schema={schema}
      onSubmit={(formData) => {
        console.log("Submitted:", formData);
      }}
    />
  );
}
Folder Structure
bash
Copy
Edit
src/
├── components/
│   ├── DynamicForm.tsx
│   └── fields/               # Input components like TextField, SelectField, etc.
├── types/                   # TypeScript types/interfaces
├── utils/                   # Utility functions
├── index.ts                 # Package entry
└── styles/
🛠️ Scripts
bash
Copy
Edit
npm run build     # Build package using tsc
npm run test      # Run unit tests
npm run dev       # Run demo with Vite (optional)
✨ Customization
Add custom themes using styled-components

Extend input types by modifying fields/

Add validation rules using Yup or your own logic

📄 License
MIT — free to use and modify.

🙋‍♂️ Feedback / Issues
If you encounter a bug or want a new feature, feel free to open an issue or pull request.
