import { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  function handleChangeName(event) {
    setName(event.target.value);
  }
  function handleChangeAge(event) {
    setAge(event.target.value);
  }
  function handleChangeGender(event) {
    setGender(event.target.value);
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    if (name != '' && age != '') {
      onSubmit({ name, age, gender });
    }
    setName('');
    setAge('');
    setGender('');
  }

  return (
    <>
      <div className="form-container">
        <h2>Formulário</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form__input-container">
            <div>
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" value={name} onChange={handleChangeName} />
            </div>
            <div>
              <label htmlFor="age">Idade</label>
              <input type="number" name="age" id="age" value={age} onChange={handleChangeAge} />
            </div>
          </div>
          <div onChange={handleChangeGender}>
            <p>Gênero:</p>
            <label>
              Masculino
              <input type="radio" name="gender" value="Masculino" defaultChecked={true} />
            </label>
            <label>
              Feminino
              <input type="radio" name="gender" value="Feminino" />
            </label>
            <label>
              Outro
              <input type="radio" name="gender" value="Outro" />
            </label>
          </div>
          <button>Enviar</button>
        </form>
      </div>
    </>
  );
};
