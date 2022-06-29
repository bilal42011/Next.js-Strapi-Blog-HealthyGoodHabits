import Lowernavbar from "./Lowernavbar/Lowernavbar";
import Uppernavbar from "./Uppernavbar/Uppernavbar";
import Resnav from "./Resnavbar/Respnavbar";
import styles from "../../../styles/allnavbar.module.css";

const Navbar=()=>{
return <div className={styles.parent}>
<div className={styles.bigscreennav}>
<Uppernavbar />
<Lowernavbar />
</div>
<div className={styles.smallscreennav}>
    <Resnav></Resnav>
</div>
</div>
}
export default Navbar;