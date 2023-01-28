import React, { useState, useEffect } from 'react';

function Tipos() {

    const [tipos, setTipos] = useState(null);

    useEffect(() => {

        function loadApi() {
            let url = 'https://pokeapi.co/api/v2/type';
            fetch(url)
                .then((r) => r.json())
                .then((json) => {
                    setTipos(json);

                })
        }

        loadApi();

    }, []);


    return (
        <div>
            <h2>Página Tipos</h2>
            <div>
                {tipos != null && tipos.results.map((item) => {
                    return (
                        <article key={item.id}>
                            <strong>{item.name}</strong>
                        </article>
                    )
                })}
            </div>
        </div>
    );
}

export default Tipos;