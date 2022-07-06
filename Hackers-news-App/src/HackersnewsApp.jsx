import { Navigate, Route, Routes } from "react-router-dom";
import { MainView } from "./Components/MainView";
import { FavoritesView } from "./Components/FavoritesView";
import logo from "./Icons/HackersNewsLogo/hacker-news@3x.png";
import { CustomNavTab } from "./Components/CustomNavTab";
// const initValueSelector = () => {
//     return JSON.parse(localStorage.getItem('selection')) || 'Angular';
// }

export const HackersnewsApp = () => {

    return (
        <div className="Front-End-Test---Home-view">
        {/* Importacion y uso de logo */}
            <div className="Rectangle-2-Copy">
                <img src={logo} className="HACKER-NEWS" />
            </div>
        {/* creacion de un componente para manejar las rutas */}
            <CustomNavTab />
            
        {/* Rutas agregadas usando react-router-dom */}
            <Routes > 
                <Route path="/" element={<MainView />} />
                <Route path="favorites" element={<FavoritesView />} />

                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}