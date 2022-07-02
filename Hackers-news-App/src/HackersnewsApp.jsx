import { useState } from "react";
import Select from 'react-select';
import { useFetch } from "./Hooks/useFetch"

import 'bootstrap/dist/css/bootstrap.min.css';

export const HackersnewsApp = () => {
    // const query = 'react';
    const [query, setQuery] = useState({ label: '', value: 0 });

    const { data, isLoading } = useFetch(`http://hn.algolia.com/api/v1/search_by_date?query=${query.label}`);

    const selectorFilter = [
        { label: "Angular", value: 1 },
        { label: "React", value: 2 },
        { label: "Vuejs", value: 3 }
    ];

    const hits = !!data && data.hits;

    const filter = ((query) => {
        setQuery(query);
    })

    console.log(hits);

    return (
        <>
            <h1>HACKERS NEWS</h1>
            <hr />
            {/* Componente de selector  */}
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <Select onChange={filter} options={selectorFilter} />
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
            {/* Fin del selector */}
            {/* contenedor de noticias */}

            {
                isLoading && <h2>Cargando...</h2>
            }
            <ol>
                {
                    !!hits && hits.map((hit) => (
                        <li key={hit.objectID}>{hit.comment_text}</li>
                    ))
                }
            </ol>
        </>
    )
}