import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Pokemon from './pages/Pokemon/Pokemon';
import Tipos from './pages/Tipos/Tipos';
import Erro from './pages/Erro/Erro';

function Rotas(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/pokemon' element={<Pokemon/>}/>
            <Route path='/tipos' element={<Tipos/>}/>

            <Route path='*' element={<Erro/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default Rotas;