import React from 'react'
import PageDefault from '../../../components/PageDefault';
import {Link} from 'react-router-dom';


function AddCategoria() {
    return ( 
        <PageDefault >
        <h1> Adição de Categoria</h1>

        <form>
            <label>
                Nome da Categoria:
                <input type="text"/>
            </label>
            <button>
               Adicionar
            </button>
        </form>

        <Link to = "/" >
        Regressar à homepage 
        </Link> 
        </PageDefault>
    )
}

export default AddCategoria;
