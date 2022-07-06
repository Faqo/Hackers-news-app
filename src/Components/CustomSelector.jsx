import { FormControl, MenuItem, Select } from "@mui/material"
import { useEffect } from "react"
import { DiAngularSimple, DiReact } from "react-icons/di"
import { FaVuejs } from "react-icons/fa"
import { PropTypes } from 'prop-types';

export const CustomSelector = ({query,setQuery}) => {
    //El componente permite mostrar el selector de filtro de la vista MainView, recibe las variables de useState para query creadas en MainView donde se necesitan para hacer fetch de los datos
    const filter = (({ target }) => {
        setQuery(target.value);
    });  //aqui se cambiara el filtro indicado haciendo uso de la funcion heredada por props

    useEffect(() => {
        localStorage.setItem('selection', JSON.stringify(query)); //al registrar un cambio del valor de filtro este se guardara en el localstorage para que permanezca 
    }, [query]);

    //se usaron iconos de react-icons para facilitar la implementacion asi que estos estaran en escala de grises fuera de eso se usaron componentes de MUI estudiados en su documentacion.
    return (
        < FormControl 
            sx={{ m: 1, minWidth: 240 }} 
            size="small" 
            >
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
        </FormControl >
    )
}

CustomSelector.propTypes = {
    query: PropTypes.string.isRequired,
    setQuery: PropTypes.func.isRequired
}