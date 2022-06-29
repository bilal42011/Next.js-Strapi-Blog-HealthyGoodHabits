import { Grid } from "@mui/material";
import styles from "../../../../styles/lowernavbar.module.css";
import Link from "next/link";

const Lowernavbar=()=>{
return <div className={styles.navbar}>
<Grid container sx={{height:"100%",width:"100%"}} justifyContent="center" alignContent="center">
    
    <Grid container item xs={6} sm={4} md={5} lg={5} xl={6} justifyContent="center" 
    alignItems="center">
        <Grid item xs={12} sm={10} md={10} lg={8} xl={8}>
         <Link href="/">
            <h1 className={styles.navheader}>HealthyGoodHabits</h1>
            </Link>
            </Grid>    
        </Grid>
    
        
    <Grid container item xs={6} sm={8} md={7} lg={7} xl={6} justifyContent="center" 
     alignItems="center">
        <Grid item xs={2} sm={2} md={2} lg={1.8} xl={2}>
            <Link href="/"><a className={styles.link}>RECEPIES</a></Link>
            </Grid>
        <Grid item xs={2} sm={2} md={2} lg={1.8} xl={2}>
            <Link href="/"><a className={styles.link}>NUTRITION</a></Link>
            </Grid>
        <Grid item xs={2} sm={2} md={2} lg={1.8} xl={2}>
            <Link href="/"><a className={styles.link}>LIFESTYLES</a></Link>
            </Grid>
        <Grid item xs={3} sm={6} md={4} lg={3} xl={3}>
            <Link href="/"><a><div className={styles.sidebutton}>Workouts Index</div></a></Link>
            </Grid>
        </Grid>
</Grid>


</div>
}

export default  Lowernavbar;