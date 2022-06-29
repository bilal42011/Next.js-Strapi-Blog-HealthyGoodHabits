import {Grid,Divider} from "@mui/material";
import Footeritem from "./FooterItem/Footeritem";
import styles from "../../../styles/footer.module.css";

let data=[{title:{name:"About",link:"/"},data:[{name:"CONTACT",link:"/"},{name:"PRESS",link:"/"}
,{name:"PRIVACY POLICY",link:"/"},{name:"ACCESSBILITY",link:"/"}]}
,{title:{name:"Recipies",link:"/"},data:[{name:"BREAKFASTS",link:"/"},{name:"MAINS",link:"/"}
,{name:"SNACKS",link:"/"},{name:"DRINKS",link:"/"}]}
,{title:{name:"Nutrition",link:"/"},data:[{name:"MEAL PLANS",link:"/"},{name:"INTUITIVE EATING",link:"/"}
,{name:"HEALTHY BABIES",link:"/"},{name:"RECIPIE ROUNDUPS",link:"/"}]},
,{title:{name:"Lifestyle",link:"/"},data:[{name:"TRAVEL",link:"/"},{name:"FITNESS",link:"/"}
,{name:"MOTHERHOOD",link:"/"},{name:"FAVORITE PRODUCTS",link:"/"}]}
,{title:{name:"More",link:"/"},data:[{name:"30 UNDER 30 EBOOK",link:"/"},{name:"COOKBOOK",link:"/"}
,{name:"PLANT BASED JUNIORS",link:"/"}]}
]



const Footer=()=>{

return  <div className={styles.footerwrapper}>
   <Grid container sx={{width:"100%",textAlign:"center"}} justifyContent="center" alignContent="center" columnSpacing={5}>
    {
        data.map((item,ind)=><Footeritem title={item.title} data={item.data} key={ind} />)
    }
   </Grid>
    </div>

}

export default Footer;