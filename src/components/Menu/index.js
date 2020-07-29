import React from 'react';
import {Link} from 'react-router-dom'
import Marineflix from '../../assets/img/Marineflix.png'
import './Menu.css';
import Button from '../Button';

//import ButtonLink from './components/ButtonLink';

function Menu() {
    return(
        <nav className = "Menu">
         <Link to ="/">
            < img className = "MarineflixLogo" src = {Marineflix} alt = "Marineflix logo" />
         </Link>
         <Button as ={Link} className = "ButtonLink" to = "/registo/video" > 
                Novo Vídeo 
         </Button>
        </nav>
    );
}

export default Menu; 