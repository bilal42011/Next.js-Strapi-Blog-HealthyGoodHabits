import { Divider } from "@mui/material";
import styles from "../../../styles/authordetails.module.css";

const Authordetails=({author})=>{

return <>
<Divider sx={{marginTop:"3rem"}}/>
<div className={styles.authordetwrapper}>
<p className={styles.authortitle}>Want To know About author?</p>
<p className={styles.authorname}>{author.name} | {author.profession}</p>
<p className={styles.description}>{author.description}</p>
</div>  
<Divider sx={{paddingBottom:"3rem"}}/>
</>
}

export default Authordetails;