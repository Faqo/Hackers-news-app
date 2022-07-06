import { FormControl, MenuItem, Select } from "@mui/material"
import { useEffect } from "react"
import { DiAngularSimple, DiReact } from "react-icons/di"
import { FaVuejs } from "react-icons/fa"
import { PropTypes } from 'prop-types';

export const CustomSelector = ({query,setQuery}) => {

    const filter = (({ target }) => {
        setQuery(target.value);
    })

    useEffect(() => {
        localStorage.setItem('selection', JSON.stringify(query));
    }, [query]);

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