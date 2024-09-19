
import Product from "./Product"
import { Box } from "@mui/material"
function Homepage(e){
   const {productData} = e
    return (
            <>
         <Box sx={{display:"flex",flexWrap:'wrap',justifyContent:"center" ,gap:"15px",marginTop:"13px"
         }}>


         {
                productData.map((value)=>(
                            <>
                        <Product data={value}/>
                            </>
                ))
            }


         </Box>

          

            
           
            
            </>
    )
}

export default Homepage