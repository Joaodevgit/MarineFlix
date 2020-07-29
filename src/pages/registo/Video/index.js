import React from 'react'
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';


function AddVideo() {
    return ( 
    <PageDefault >
         <h1> Adição de Vídeo </h1>

        <Link to="/registo/categoria">
            Adicionar Categoria
        </Link>
    </PageDefault>
    )
}

export default AddVideo;
