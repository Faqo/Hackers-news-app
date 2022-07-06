import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    //CustomHook para hacer Fetch de peticiones https 
    const [state, setState] = useState({
        data: null,
        isLoading: true,
    })

    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true
        })
        const resp = await fetch(url);
        const data = await resp.json();
        setState({
            data,
            isLoading: false,
        })
    }

    useEffect(() => {

        getFetch()

    }, [url])

    //el Hook queda atento de los cambios de url y entrega los datos y si se terminaron de cargar.
    return {
        data: state.data,
        isLoading: state.isLoading,
    };
}
