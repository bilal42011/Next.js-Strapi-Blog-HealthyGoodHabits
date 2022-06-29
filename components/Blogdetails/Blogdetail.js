import dayjs from "dayjs";
import Image from "next/image";
import Authordetails from "./Authordetails/Authordetails";
import styles from  "../../styles/blogdetails.module.css";



const Blogdetails=({data:blog})=>{

    let title=blog.attributes.title;
    let authorname=blog.attributes.author.name;
    let description=blog.attributes.body;
    let date=dayjs(blog.attributes.date).format("MMM DD, YYYY");
    let imageurl1=blog.attributes.thumbnail.data.attributes.formats.thumbnail.url;
    imageurl1="http://localhost:1337"+imageurl1;
    let imageurl2=blog.attributes.images.data[0].attributes.formats.thumbnail.url;
    imageurl2="http://localhost:1337"+imageurl2;

return <div className={styles.blogdetailswrapper}>
  <p  className={styles.blogtitle}>{title}</p>
  
  <p  className={styles.blogauthordate}>
    By:<span className={styles.authorname}>{authorname}</span> on {date}
    </p>
    
    <div className={styles.imgwrapper}>
    <Image src={imageurl1} width="1000" height={1100} alt="blogtumbnail"></Image>
    </div>
    
    <div className={styles.descwrapper}>
    <p>{description}{description}</p>         {/* keep in mind dummy description is added twice to fill up space */}
    </div>

    <div className={styles.imgwrapper}>
    <Image src={imageurl2} width="1000" height={1100} alt="blogdetailimage"></Image>
    </div>
    
    <div className={styles.descwrapper} style={{textAlign:"center"}}>
    <p className={styles.desctitles}>Advantages</p>
    <p>{description}</p>         {/* Again */}
    </div>

    <Authordetails author={blog.attributes.author}/>
</div>


}

export default Blogdetails