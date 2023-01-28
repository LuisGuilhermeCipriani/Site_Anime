import React from 'react';
import { Link } from 'react-router-dom';

function Pokemon(){
    return(
        <div>
            <h2>Página Pokemon</h2>
            <Link to='/'>Home</Link>
        </div>
    );
}

export default Pokemon;