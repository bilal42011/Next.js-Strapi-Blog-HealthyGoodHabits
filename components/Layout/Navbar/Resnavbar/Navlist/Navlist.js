import { Input } from "@mui/material";
import Router from "next/router";
import styles from "../../../../../styles/navlist.module.css";


const Navlist=({changedrawer})=>{

let clickhandler=(link)=>{
changedrawer();
Router.push(link);
}

return <> 
<ul  className={styles.navlist}>
<li><a onClick={()=>{
    return clickhandler("/");
}}>RECEPIES</a></li>
<li><a onClick={()=>{
    return clickhandler("/");
}}>NUTRITION</a></li>
<li><a onClick={()=>{
    return clickhandler("/");
}}>LIFESTYLES</a></li>
<li><a onClick={()=>{
    return clickhandler("/");
}}>WORKOUTS INDEX</a></li>
<li>.</li>
<li><a onClick={()=>{
    return clickhandler("/");
}}>ABOUT</a></li>
<li><a onClick={()=>{
    return clickhandler("/");
}}>CONTACT</a></li>
<li><a onClick={()=>{
    return clickhandler("/");
}}>PRESS</a></li>
<li><a onClick={()=>{
    return clickhandler("/");
}}>GOOD HEALTHY HABITS</a></li>
 <li><Input placeholder="Search" disableUnderline fullWidth sx={{border:"1px solid #ef6a47 "}}/></li>
</ul>
</>
}

export default Navlist;