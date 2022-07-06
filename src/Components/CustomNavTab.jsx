import { Box, Stack, Tab, Tabs } from "@mui/material"
import { Link } from "react-router-dom";
import { useRouteMatch } from '../Hooks/useRouteMatch';

export const CustomNavTab = () => {
    // metodos para usar los componentes de MUI de custom tabs con navegacion 
    const routeMatch = useRouteMatch(['/', '/favorites']);
    const currentTab = routeMatch?.pattern?.path;  

    return (
        <Box sx={{ marginBlock: 6 }}>
            <Stack direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Tabs value={currentTab}>

                    <Tab label={"ALL"} value="/" to="/" component={Link} sx={{width: 98, height: 31}}/>
                    
                    <Tab label={"My faves"} value="/favorites" to="/favorites" component={Link} />

                </Tabs>
            </Stack>
        </Box>
    )
}