import React from 'react';
import { FooterBase, Author } from './styles';

function Footer() {
  return (
    <FooterBase>
       <Author>
         &copy; 2020 | João Tiago Moreira Pereira
        </Author> 
         <hr style = {{margin: "0 5%"}}/>
      <p>
        Criado com a ajuda da
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
    </FooterBase>
  );
}

export default Footer;
