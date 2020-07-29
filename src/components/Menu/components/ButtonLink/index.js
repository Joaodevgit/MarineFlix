import React from 'react';


function ButtonLink(props) {
    // props => {o que for passado no parâmetro, href: "/" }
    console.log(props)
    return ( 
        <a href= {props.href} className = {props.className}>
            {props.children}
        </a>
    );
}

export default ButtonLink;