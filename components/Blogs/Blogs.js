import Blogsection from "./Blogsection/Blogsection";
import styles from "../../styles/blogwrapper.module.css";

const Blogs =({data})=>{
    
return <div className={styles.blogwrapper}>
{
    data.map(blogs=><Blogsection sectiontitle={blogs.sectiontitle} data={blogs.data}/>)
} 

</div>

}

export default Blogs ;