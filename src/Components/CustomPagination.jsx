import { Pagination, Stack } from "@mui/material"
import { Box } from "@mui/material"

export const CustomPagination = ({totalPage, page, onChange}) => {
    //este componente recibe toda la info para crear la paginacion indicada con el set de datos dato usando las props entregadas donde corresponde 
    //fuera de eso se usaron elementos de MUI desde la documentacion.
    return (
        <Box sx={{ marginBlock: 12 }}>
            <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Pagination
                    count={totalPage}
                    page={page}
                    onChange={onChange}
                    color="primary"
                    variant="outlined"
                    shape="rounded"
                    size="large"
                />
            </Stack>
        </Box>
    )
}