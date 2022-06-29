import { Grid } from "@mui/material";
import Blog from "./Blog/Blog";
import styles from "../../../styles/blogsection.module.css";

const Blogsection=({sectiontitle,data})=>{    
    return <div className={styles.blogsection}>
<Grid container justifyContent="center">
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <p className={styles.sectiontitle}>{sectiontitle}</p>
        </Grid>
        <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} justifyContent="center" spacing={4}>
            {
                data.map((blog,ind)=><Blog  blog={blog} key={ind}/>)
            }
            </Grid>
</Grid>

    </div>

}

export default Blogsection;

