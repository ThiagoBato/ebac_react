import { useState } from 'react';

import { Form } from './components/Form';
import { FormResponse } from './components/FormResponse';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <>
      <div className="content-container">
        <Form onSubmit={handleFormSubmit} />
        <FormResponse formData={formData} />
      </div>
    </>
  );
}

export default App;
