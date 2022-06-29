import { Grid, Input} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import styles from "../../../../styles/uppernavbar.module.css";
import Link from "next/link";


const Uppernavbar=()=>{

return <div className={styles.navbar}>
<Grid container sx={{height:"100%"}}>
    
    <Grid container item xs={6} sm={6} md={6} lg={6} xl={6} justifyContent="center" 
    alignItems="center">
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
            <Link href="/"><a>ABOUT</a></Link>
            </Grid>
        <Grid item xs={2} sm={2.2} md={2.2} lg={2.2} xl={2}>
            <Link href="/"><a>CONTACT</a></Link>
            </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
            <Link href="/"><a>PRESS</a></Link>
            </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <SearchOutlinedIcon />  
            </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
        <Input placeholder="Search" disableUnderline fullWidth/>
            </Grid>    
        </Grid>
    
        
    <Grid container item xs={6} sm={6} md={6} lg={6} xl={6} justifyContent="center" 
     alignItems="center">
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <Link href="/"><a><FacebookOutlinedIcon /></a></Link>
            </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <Link href="/"><a>
                <TwitterIcon />
                </a></Link>
            </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <Link href="/"><a><InstagramIcon /></a></Link>
            </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <Link href="/"><a><PinterestIcon/></a></Link>
            </Grid>
        <Grid item xs={3} sm={8} md={7} lg={5} xl={5}>
            <Link href="/"><a><div className={styles.sidebutton}>HEALTHY GOOD HABITS</div></a></Link>
            </Grid>
        </Grid>
</Grid>

</div>

}

export default Uppernavbar;