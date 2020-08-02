import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault';
import {Link} from 'react-router-dom';
import FormField from '../../../components/FormField';


function AddCategory() {
    const initialValues = {
        nome:'',
        descricao:'',
        cor:'',
    }

    const [categories, setCategories] = useState([]);
    const [values, setValues] = useState(initialValues);
    
    function setValue(key,value){
        //key: nome, descrição, cor,...
        setValues({
            ...values,
            [key]: value, // nome: 'value'
        })
    }

    function handlerChange(eventInfo) {
        setValue(
            eventInfo.target.getAttribute('name'),
            eventInfo.target.value
        );
    }

    return ( 
        <PageDefault >
        <h1> Adição de Categoria {values.nome} </h1>

        <form onSubmit={function handleSubmit(eventInfo){
            eventInfo.preventDefault();
            console.log('Foi feita uma submissão');
            setCategories([
                ...categories, 
                values
            ]);
            
            setValues(initialValues);
        }}>

        <FormField
            label ="Nome da Categoria: "
            type="text"
            name = "nome"
            value = {values.nome}
            onChange = {handlerChange}
        />

        {/* VER COMO FAZER O TEXTAREA*/}
        <FormField
            label ="Descrição da Categoria: "
            type="???"
            name = "descricao"
            value = {values.descricao}  
            onChange = {handlerChange}
        />

        {/*
        <div>
            <label>
                Descrição da Categoria:
                <textarea type = "text"
                          value = {values.descricao}
                          name= "descricao"
                          onChange = {handlerChange}
                /> 
            </label>
        </div>
        */}
        <FormField
            label ="Cor: "
            type="color"
            name = "cor"
            value = {values.cor}
            onChange = {handlerChange}
        /> 
            
        <button>
            Adicionar
        </button>
        </form>


        <ul>
            {categories.map((category, index) => {
                return (
                    <li key = {`${category} ${index}`}> {/*usado para garantir que a key em li é único*/}
                        {category.nome}
                    </li>
                )
            })}
        </ul>

        <Link to = "/" >
        Regressar à homepage 
        </Link> 
        </PageDefault>
    )
}

export default AddCategory;
