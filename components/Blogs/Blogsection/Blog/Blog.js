import { Grid } from "@mui/material";
import Image from "next/image";
import styles from "../../../../styles/blog.module.css";
import Link from "next/link";

const Blog=({blog})=>{
let imageurl=blog.attributes.thumbnail.data.attributes.formats.thumbnail.url;
imageurl="http://localhost:1337"+imageurl;
let blogcategory=blog.attributes.category;

return <Link href={{pathname: '/[blogcategory]/[id]',
query: {id:blog.id, blogcategory,category: blogcategory } }}>

<Grid container item xs={12} sm={6} md={4} lg={4} xl={4} justifyContent="center" sx={{cursor:"pointer"}}>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
    <Image layout="responsive" width="300" height="250" src={imageurl}></Image>
    </Grid>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
    <p className={styles.blogauthor}>{`Author: ${blog.attributes.author.name}`}</p>
    </Grid>
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
    <h2 className={styles.blogtitle}>{blog.attributes.title}</h2>
    </Grid>
    </Grid>
    
    </Link>
}

export default Blog;