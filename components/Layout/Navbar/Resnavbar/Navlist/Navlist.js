import Link from "next/link";
import { Grid, Input } from "@mui/material";
import styles from "../../../../../styles/navlist.module.css";


const Navlist=()=>{
return <> 
<ul  className={styles.navlist}>
<li><Link href="">RECEPIES</Link></li>
<li><Link href="">NUTRITION</Link></li>
<li><Link href="">LIFESTYLES</Link></li>
<li><Link href="">WORKOUTS INDEX</Link></li>
<li><Link href="">.</Link></li>
<li><Link href="">ABOUT</Link></li>
<li><Link href="">CONTACT</Link></li>
<li><Link href="">PRESS</Link></li>
<li><Link href="">GOOD HEALTHY HABITS</Link></li>
 <li><Input placeholder="Search" disableUnderline fullWidth sx={{border:"1px solid #ef6a47 "}}/></li>
</ul>
</>
}

export default Navlist;