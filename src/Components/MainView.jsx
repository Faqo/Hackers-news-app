import { Box, Grid, Pagination, Stack } from "@mui/material"
import { useState } from "react"
import { CustomSelector } from "./CustomSelector"
import { GridCustomItem } from "./GridCustomItem"
import { LoadingNews } from "./LoadingNews"
import { useFetch } from '../Hooks/useFetch';
import { CustomPagination } from "./CustomPagination"

//La siguiente funcion entregara los datos del Selector guardados en localstorage se seteo en 'Angular' por defecto ya que existen datos para '' y por evitar confusion se dejo asi
const initValueSelector = () => {
    return JSON.parse(localStorage.getItem('selection')) || 'Angular';
}

export const MainView = () => {

    const [query, setQuery] = useState(initValueSelector);

    const [page, setPage] = useState(1);

    const { data, isLoading } = useFetch(`https://hn.algolia.com/api/v1/search_by_date?query=${query}&hitsPerPage=8&page=${page}`);

    const hits = !!data && data.hits;

    //hasta este punto es seteo de variables usando hooks de react query para el selector, page para controlar la pagina actual y data donde se encuentran los datos que se trabajaran

    const handleChange = (_, value) => {
        setPage(value);
    };

    return (
        <>
            <Grid>
                <CustomSelector query={query} setQuery={setQuery} /> {/* Componente creado a partir de MUI selector este recibe la query actual y el manejador setQuery */}

                {
                    //se utilizo la condicion isLoading para mostrar un mensaje de carga cuando la peticion http se encuentra en proceso
                    isLoading
                        ? <LoadingNews />
                        :
                        <Grid
                            aria-label="Grid"
                            container
                            spacing={2}
                            columns={16}
                            justifyContent='center'
                            alignItems='center'
                            alignContent="stretch"
                            wrap="wrap"
                        >
                            {
                                !!hits && hits.map((hit) => (
                                    <GridCustomItem key={hit.created_at} {...hit} /> // componente creado para el manejo de las filas de datos a mostrar este recibe todos los datos de la fila correspondiente.
                                ))
                            }
                        </Grid>

                }
            </Grid>
            {
                //igual que para los datos se uso el isLoading pero negado en este caso para indicar cuando debia mostrar el componente de paginacion
                !isLoading &&
                <CustomPagination
                    totalPage={data?.nbPages-1}
                    page={page}
                    onChange={handleChange}
                /> //componente personalizado para la paginacion, este recibe la cantidad de paginas de datos fetchados, la pagina en la que se encuentra la app y el manejador de pagina
            }
        </>


    )
}