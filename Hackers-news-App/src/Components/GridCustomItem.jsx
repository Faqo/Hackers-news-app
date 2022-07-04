import { IconButton, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TimeAgo from "react-timeago";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { red } from '@mui/material/colors';
import { useEffect, useState } from 'react';

export const GridCustomItem = ({ author, story_title, story_url, created_at, objectID }) => {
    
    const [hover, setHover] = useState(false);

    function open(url) {
        const win = window.open(url, '_blank');
        if (win != null) {
          win.focus();
        }
      }

      useEffect(() => {
            console.log(hover); 
      
      }, [hover])
      

      console.log(hover);

    return (
        <Grid item zeroMinWidth xs={6} >
            <Paper 
                className={` ${hover ? 'oRectangle' : 'Rectangle'}`}
                onMouseEnter={() => setHover(true)} onMouseLeave={()=>setHover(false)}
            >
                <Grid container spacing={4} >
                    <Grid item xs className='cardContent' >
                        <Grid item xs >
                            <Typography variant="caption" color="initial"> <AccessTimeIcon fontSize="smaller" /> <TimeAgo date={created_at} /> by {author || "author"} `</Typography>
                        </Grid>
                        <Grid item xs >
                            <Typography onClick={()=>open(story_url)} className='textRectangle' variant="body1" color="initial" sx={{ cursor: "pointer" }} gutterBottom> {story_title || "untitled"} </Typography>
                        </Grid>
                    </Grid>

                    {/* hit.author, hit.story_title, hit.story_url, hit.created_at */}
                    <Grid item>
                        <IconButton sx={{ width: 68, height: 90 }}>
                            {/* <Img alt="complex" src="/static/images/grid/complex.jpg" /> */}
                            {/* si el objectID esta en favoritos, dentro de localstorage entonces muestra el corazon completo */}
                            <FavoriteBorderIcon sx={{ width: 24, height: 22, color: red[500] }} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}