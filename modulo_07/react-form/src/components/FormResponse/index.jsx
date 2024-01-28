export const FormResponse = ({ formData }) => {
  const { name, age, gender } = formData;

  return (
    <>
      <div className="response-container">
        <h2>Resposta do formulário</h2>
        <p>Nome: {name}</p>
        <p>Idade: {age}</p>
        <p>Gênero: {gender}</p>
      </div>
    </>
  );
};
