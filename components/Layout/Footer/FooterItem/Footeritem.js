import {Grid} from "@mui/material";
import Link from "next/link";
import Footerlink from "./Footerlink/Footerlink";

const Footeritem=({title,data})=>{
return <Grid container item xs={6} sm={4} md={4} lg={2} xl={2} justifyContent="center" alignContent="start">
<Grid item xs={12} sm={12} md={12} lg={12} xl={12} sx={{fontWeight:"bold",marginBottom:"1.5rem",fontSize:"1.5rem"
,color:"#ef6a47"}}>
   <Link href={title.link}>
  <a>{title.name}</a>
    </Link>
</Grid>
{
data.map(item=><Footerlink name={item.name} link={item.link}/>)
}
</Grid>


}


export default Footeritem;