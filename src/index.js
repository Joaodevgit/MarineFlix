import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import AddVideo from './pages/registo/Video';
import AddCategoria from './pages/registo/Categoria';

// Desafio tentar personalizar a página 404 num componente
// Alternativa -> <Route component ={() =>(<div> Página 404</div>)}/>
const Pagina404 = () => (<div> Página 404</div>);

ReactDOM.render(
  <BrowserRouter>
    {' '}
    {/* representa as rotas dos navegadores */}
    <Switch>
      {' '}
      {/* quais são as entradas possíveis */}
      <Route path="/" component={Home} exact />
      {' '}
      {/* a palavra reservada "exact" faz com que nós só consigamos aceder a uma dada página
                                                    única e exclusivamente por uma dada route 
                                                    (Garantia da integridade da rota) */ }
      <Route path="/registo/video" component={AddVideo} />
      <Route path="/registo/categoria" component={AddCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
