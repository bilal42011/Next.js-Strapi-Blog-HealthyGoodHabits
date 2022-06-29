import Head from 'next/head';
import Blogs from '../components/Blogs/Blogs';

export async function getStaticProps(){ 
  
const foodsres= await fetch("http://localhost:1337/api/healthyfoodsblogs?populate=*");
const foodsblogsjson=await foodsres.json();
const foodsblogs=await foodsblogsjson.data;
const habitsres= await fetch("http://localhost:1337/api/healthyhabitsblogs?populate=*");
const habitsblogsjson=await habitsres.json();
const habitsblogs=await habitsblogsjson.data;
const mindsres= await fetch("http://localhost:1337/api/healthymindsblogs?populate=*");
const mindsblogsjson=await mindsres.json();
const mindsblogs= await mindsblogsjson.data;

return {
  props:{
   blogs: [
   {sectiontitle:"Healthy Foods",data:foodsblogs},
   {sectiontitle:"Healthy Habits",data:habitsblogs},
   {sectiontitle:"Healthy Minds",data:mindsblogs},
  ]
},
};

}


export default function Home({blogs}) {

  return (
    <>
    <Head><title>Home | HealthyGoodHabits</title></Head>
    <Blogs data={blogs}></Blogs>
    </>
  )
}
