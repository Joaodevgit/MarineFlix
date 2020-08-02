import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function AddCategory() {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    // key: nome, descrição, cor,...
    setValues({
      ...values,
      [key]: value, // nome: 'value'
    });
  }

  function handlerChange(eventInfo) {
    setValue(
      eventInfo.target.getAttribute('name'),
      eventInfo.target.value,
    );
  }

  useEffect(() => {
    const URLLOCALHOST = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://marineflix.herokuapp.com/categorias';
    fetch(URLLOCALHOST)
      .then(async (serverResponse) => {
        const response = await serverResponse.json();
        setCategories([
          ...response,
        ]);
      });

    //    setTimeout(() => {
    //      setCategories([
    //        ...categories,
    //        {
    //          id: 1,
    //         nome: 'Músicas Acústicas',
    //          descricao: 'Músicas acústicas que valem a pena ouvir!',
    //          cor: '#cbd1f',
    //        },
    //        {
    //          id: 2,
    //          nome: 'Valorant',
    //          descricao: 'Guias acerca do jogo Valorant',
    //          cor: '#cbd1f',
    //        },
    //      ]);
    //    }, 3 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        {' '}
        Adição de Categoria
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(eventInfo) {
        eventInfo.preventDefault();
        console.log('Foi feita uma submissão');
        setCategories([
          ...categories,
          values,
        ]);

        setValues(initialValues);
      }}
      >

        <FormField
          label="Nome da Categoria: "
          name="nome"
          value={values.nome}
          onChange={handlerChange}
        />

        <FormField
          label="Descrição da Categoria: "
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handlerChange}
        />

        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={values.cor}
          onChange={handlerChange}
        />

        <Button>
          Adicionar
        </Button>
      </form>

      {categories.length === 0 && (
      <div>
        {/* A carregar... */}
        Loading...
      </div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={`${category.nome}`}>
            {/* usado para garantir que a key em li é único */}
            {category.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Regressar à homepage
      </Link>
    </PageDefault>
  );
}

export default AddCategory;
