import Grid from '@mui/material/Grid'


export const GridCustomItem = ({hit}) => {
    
    return (
        <Grid item zeroMinWidth xs={6}>
            <div>
                {/* hit.author, hit.story_title, hit.story_url, hit.created_at */}
                <span>{ hit.story_title || "untitled"}</span>
            </div>
        </Grid>
    )
}