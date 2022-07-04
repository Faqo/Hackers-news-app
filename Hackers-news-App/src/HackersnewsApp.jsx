import { useState } from "react";


import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useFetch } from "./Hooks/useFetch"

import { useEffect } from "react";
import Grid from '@mui/material/Grid'
import { GridCustomItem } from "./Components/GridCustomItem";
import { LoadingNews } from "./Components/LoadingNews";
import { ListItemIcon, ListItemText } from "@mui/material";
import { DiAngularSimple , DiReact} from 'react-icons/di';
import { FaVuejs } from 'react-icons/fa';
const initValueSelector = () => {
    return JSON.parse(localStorage.getItem('selection')) || '';
}
const initValuePage = () => {
    return JSON.parse(localStorage.getItem('page')) || 1;
}
export const HackersnewsApp = () => {
    // const query = 'react';
    const [query, setQuery] = useState(initValueSelector);
    const [page, setPage] = useState(initValuePage)

    const { data, isLoading } = useFetch(`http://hn.algolia.com/api/v1/search_by_date?query=${query}&hitsPerPage=8&page=${page}`);

    const hits = !!data && data.hits;

    const filter = (({ target }) => {
        setQuery(target.value);
    })

    const pageChange = (({ target }) => {
        setPage(target.value);
    })

    useEffect(() => {
        localStorage.setItem('selection', JSON.stringify(query));
    }, [query])

    return (
        <>
            <h1>HACKERS NEWS</h1>
            <hr />
            {/* Selector de ui materials */}
            <FormControl sx={{ m: 1, minWidth: 240 }} size="small" >
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={query}
                    onChange={filter}
                >
                <MenuItem value={"Angular"}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <DiAngularSimple />
                        <div> Angular</div>
                    </div>
                </MenuItem>

                <MenuItem value={"React"}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <DiReact />
                            <div> React</div>
                        </div>
                    </MenuItem>

                    <MenuItem value={"Vuejs"}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <FaVuejs />
                            <div> Vuejs</div>
                        </div>
                    </MenuItem>
                </Select>
            </FormControl>
            {/* Fin del selector */}

            {/* contenedor de noticias */}

            {
                isLoading && <LoadingNews />
            }
            <Grid
                container
                rowSpacing={8}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                alignContent="stretch"
                wrap="wrap"
            >
                {
                    !!hits && hits.map((hit) => (
                        <GridCustomItem key={hit.objectID} {...hit}/>
                    ))
                }
            </Grid>

            {/* <button onClick={pageChange(2)}>wah</button> */}
        </>
    )
}