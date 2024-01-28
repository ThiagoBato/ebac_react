import { useState } from 'react';

import { Form } from './components/Form';
import { FormResponse } from './components/FormResponse';

function App() {
  const [formData, setFormData] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  const handleFormSubmit = (data) => {
    setFormData((prevData) => [
      ...prevData,
      {
        id: idCounter,
        ...data,
      },
    ]);
    setIdCounter((prevCounter) => ++prevCounter);
  };

  return (
    <>
      <div className="content-container">
        <Form onSubmit={handleFormSubmit} />
        <FormResponse formData={formData} setFormData={setFormData} />
      </div>
    </>
  );
}

export default App;
