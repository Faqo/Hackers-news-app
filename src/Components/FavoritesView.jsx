import { Box, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { arrayPagination } from "../Helpers/arrayPagination";
import { CustomPagination } from "./CustomPagination";
import { GridCustomItem } from "./GridCustomItem";

const allStorage = () => {
  //Esta funcion entregara un arreglo ordenado por fecha y separado en paginas 
  //de los elementos favoritos en localstorage.
  let values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    let aux = localStorage.getItem(keys[i]);
    if (aux.includes('author')) values.push(JSON.parse(localStorage.getItem(keys[i])));
  }
  //la siguiente funcion ordena el arreglo por fecha 
  values.sort((a,b) => new Date(b.created_at) - new Date(a.created_at));
  //ArrayPagination es un Helper hecho para separar el arreglo en areglos mas pequenio
  //que puedan ser mostrados por paginas en la vista de favoritos
  return arrayPagination(values);
}

export const FavoritesView = () => {

  const [paginated, ] = useState(allStorage);
  
  const [page, setPage] = useState(1);

  const [favArray, setFavArray] = useState(paginated[page-1]);

  const handleChange = (_, value) => {
    setPage(value);
  };

  useEffect(() => {
    setFavArray(paginated[page-1])

  }, [page])
  

  return (
    <Box>
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
            !!favArray && favArray.map((favNew) => (
              <GridCustomItem key={favNew.created_at} {...favNew} />
            ))
          }
        </Grid>
        <CustomPagination 
          totalPage={paginated.length}
          page={page}
          onChange={handleChange}
        />
    </Box>
    
  )
}