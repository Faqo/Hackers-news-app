import { Box, Grid, Pagination, Stack } from "@mui/material"
import { useState } from "react"
import { CustomSelector } from "./CustomSelector"
import { GridCustomItem } from "./GridCustomItem"
import { LoadingNews } from "./LoadingNews"
import { useFetch } from '../Hooks/useFetch';
import { CustomPagination } from "./CustomPagination"

const initValueSelector = () => {
    return JSON.parse(localStorage.getItem('selection')) || 'Angular';
}

export const MainView = () => {

    const [query, setQuery] = useState(initValueSelector);

    const [page, setPage] = useState(1);

    const { data, isLoading } = useFetch(`https://hn.algolia.com/api/v1/search_by_date?query=${query}&hitsPerPage=8&page=${page}`);

    const hits = !!data && data.hits;

    const handleChange = (_, value) => {
        setPage(value);
    };

    return (
        <>
            <Grid>
                <CustomSelector query={query} setQuery={setQuery} />

                {
                    isLoading
                        ? <LoadingNews />
                        :
                        <Grid
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
                                    <GridCustomItem key={hit.created_at} {...hit} />
                                ))
                            }
                        </Grid>

                }
            </Grid>
            {
                !isLoading &&
                <CustomPagination 
                    totalPage={data?.nbPages - 1}
                    page={page}
                    onChange={handleChange}
                />
            }
        </>


    )
}