import { useState } from "react";
import Navlist from "./Navlist/Navlist";
import { Grid } from "@mui/material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import styles from "../../../../styles/responsivenavbar.module.css";



const Resnav=()=>{
let [opendrawer,setdrawer]=useState(false);    

let clickhandler=()=>{
setdrawer(state=>!state);
}


    return <div className={styles.navbar}>
    <Grid container justifyContent="center" sx={{height:"85px"}} alignItems="center">
        <Grid item xs={5} sm={5} md={5} lg={5} xl={5}>
            <h1 className={styles.navheader}>HealthyGoodHabits</h1>
            </Grid>
        <Grid item xs={5} sm={5} md={5} lg={5} xl={5} sx={{textAlign:"right"}}>
            <button className={styles.drawerbutton} onClick={clickhandler}>
                {opendrawer?<CloseOutlinedIcon sx={{color:"#ef6a47",fontSize:"50px"}}/>
                :<MenuOutlinedIcon sx={{color:"#ef6a47",fontSize:"50px"}}/>}
                </button>
        </Grid>
    </Grid>

    <div className={styles.drawer} 
    style={{display:opendrawer?"block":"none"}}>
        <Navlist />
    </div>
    </div>
}

export default Resnav;