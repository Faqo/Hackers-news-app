import { matchPath, useLocation } from "react-router-dom";

export const useRouteMatch = (patterns) => {
    //Hook obtenido de MUI para el control de patrones de ruta 
    const { pathname } = useLocation();

    for (let i = 0; i < patterns.length; i += 1) {
        const pattern = patterns[i];
        const possibleMatch = matchPath(pattern, pathname);
        if (possibleMatch !== null) {
            return possibleMatch;
        }
    }

    return null;
}