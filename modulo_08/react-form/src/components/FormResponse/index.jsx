/* eslint-disable react/prop-types */
import { useState } from 'react';

export const FormResponse = ({ formData, setFormData }) => {
  const [selectedId, setSelectedId] = useState(null);

  const handleCrescentOrder = () => {
    const sortedData = [...formData].sort((a, b) => a.id - b.id);
    setFormData(sortedData);
  };

  const handleDecrescentOrder = () => {
    const sortedData = [...formData].sort((a, b) => b.id - a.id);
    setFormData(sortedData);
  };

  const handleDelete = (id) => {
    const updatedData = formData.filter((data) => data.id !== id);
    setFormData(updatedData);
    setSelectedId(null);
  };

  const handleShowResponse = (data) => {
    alert(
      `Item: ${data.id}\n
      Nome: ${data.name}\n
      Idade: ${data.age}\n
      Gênero: ${data.gender}`
    );
  };
  return (
    <>
      <div className="response-container">
        <h2>Resposta do formulário</h2>
        <div>
          <p>Ordernar:</p>
          <button onClick={handleCrescentOrder}>Crescente</button>
          <button onClick={handleDecrescentOrder}>Decrescente</button>
          <hr />
        </div>
        {formData.map((data) => (
          <div key={data.id} className={selectedId === data.id ? 'selected' : ''}>
            <p>Item {data.id}</p>
            <button
              onClick={() => {
                handleShowResponse(data);
              }}
            >
              Mostrar Detalhes
            </button>
            <button onClick={() => handleDelete(data.id)}>Excluir</button>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};
