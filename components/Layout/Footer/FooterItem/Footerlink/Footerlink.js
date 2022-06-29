import {Grid} from "@mui/material";
import Link from "next/link";

const Footerlink=({name,link})=>{
    
    return <Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{marginBottom:"1rem",fontWeight:"lighter"}}>
        <Link href={link}>
        <a>{name}</a>
        </Link>
    </Grid>

}

export default Footerlink;