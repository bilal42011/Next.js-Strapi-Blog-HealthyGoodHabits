import Blogsection from "./Blogsection/Blogsection";
import styles from "../../styles/blogwrapper.module.css";

const Blogs =({data})=>{
    
return <div className={styles.blogwrapper}>
{
    data.map((blogs,ind)=><Blogsection sectiontitle={blogs.sectiontitle}  data={blogs.data} key={ind}/>)
} 

</div>

}

export default Blogs ;