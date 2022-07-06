import { Button, createTheme, IconButton, Paper, ThemeProvider } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TimeAgo from "react-timeago";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red,grey } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

//esta funcion permitira rescatar el estado de la fila, si esta seleccionado como favorito o no en localstorage, recibira el date perteneciente a la fila desde created_at
const initValueFav = (created_at) => {
    const aux = JSON.parse(localStorage.getItem(`${created_at}`));
    return aux?.fav || false;
}

export const GridCustomItem = ({ author, story_title="untitled", story_url, created_at }) => {
    //se desestructuraron los datos para hacer mas facil el manejo en el componente

    const [hover, setHover] = useState(false); //con este valor se manejara la opacidad de la casilla en la que el mouse esta pasando
    const [fav, setFav] = useState(initValueFav(created_at)); //aqui se seteara si el componente tendra la marca de favorito o no.

    const open = (url) => {
        const win = window.open(url, '_blank');
        if (win != null) {
            win.focus();
        }
    } //metodo estandar para abrir un link en otra ventana

    const favHandle = () =>{
        const aux = !fav;
        setFav(aux);
        post = {...post, fav:aux} //se cambia el estado del post para luego guardarlo en el localstorage
    }

    let post = {
        author, story_title, story_url, created_at, fav
    }

    useEffect(() => {
        fav ? localStorage.setItem(`${created_at}`, JSON.stringify(post))
        : localStorage.removeItem(`${created_at}`, JSON.stringify(post));
    }, [fav]) //siempre que se cambie el estado del post/noticia como favorito el useEffect guardara los datos en localstorage

    return (
        <Grid item zeroMinWidth xs={6} >
            <Paper
                className={` ${hover ? 'oRectangle' : 'Rectangle'}`} 
                onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} 
                // dentro de este componente se ve todo el sistema de cambio de opacidad de el post
            >
                <Grid container spacing={4} >
                    <Grid item xs className='cardContent' >
                        <Grid item xs >
                            {/* se uso TimeAgo un modulo para ayudar a dar el tiempo exacto en la tarjeta */}
                            <Typography variant="caption" color="initial"> <AccessTimeIcon fontSize="smaller" /> <TimeAgo date={created_at} /> by {author || "author"} `</Typography>
                        </Grid>
                        <Grid item xs >
                            <Typography 
                                onClick={() => open(story_url)} 
                                className='textRectangle' 
                                variant="body1" color="initial" 
                                sx={{ cursor: "pointer" }} gutterBottom
                                > {story_title || 'Untitled'} 
                                </Typography>
                        </Grid>
                    </Grid>
                    
                    <Grid item >
                        {/* en este componente se revisara la logica de cambio de icono a la hora de marcar un post como favorito */}
                        <Button onClick={favHandle} className='RectangleBox' sx={{bgcolor: grey[200], }}>
                            {
                                !!fav ? 
                                <FavoriteIcon sx={{ width: 24, height: 22, color: red[500] }} />
                                :<FavoriteBorderIcon sx={{ width: 24, height: 22, color: red[500] }} />
                            }  
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

GridCustomItem.propTypes = {
    author:PropTypes.string, 
    story_title:PropTypes.string,
    story_url:PropTypes.string, 
    created_at: PropTypes.string,
}