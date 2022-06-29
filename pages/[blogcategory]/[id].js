import Head from "next/head";
import Blogdetails from "../../components/Blogdetails/Blogdetail";

export async function getServerSideProps({params,query}){

    const blogres= await fetch(`http://localhost:1337/api/${query.category}/${params.id}?populate=*`);
const blogjson=await blogres.json();
const blog=await blogjson.data;

    return {
props:{
    blog
}
    }
}


const Singleblog=({blog})=>{
    
    return <>
    <Head><title>{blog.attributes.title}</title></Head>
    <Blogdetails data={blog}/>
    </>
         
    
}

export default Singleblog;