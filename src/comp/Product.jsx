import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Checkbox } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Box } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom"; 
import {useDispatch} from 'react-redux';
import {AddToCart} from '../features/Card/cartslice'
import { whishlistatom } from '../features/whishlist/whishSlice';




export default function Product(e) {
  const {data} =e


  const dispatch = useDispatch()


  return (
    <Card sx={{  backgroundColor:"#FFFFF0", maxWidth: 345, position:"relative" , boxShadow: '1px 1px 15px 1px #D3D3D3',border:"0.001px solid #E0E0E0 "}}>
      <Checkbox  icon={<FavoriteBorder/> }checkedIcon={<Favorite color='error' />} onClick={()=> {dispatch(whishlistatom(data))}}></Checkbox>
  <Link to={`/SingleProduct/${data.id}`}>
      <CardMedia
        sx={{ height: 140 , backgroundSize:"contain" }}
        image={data.image}
        title="green iguana"
      /></Link>
      <CardContent >
        <Typography gutterBottom variant="h6" component="div">
        
        {data.title}
        </Typography>
        <Typography  variant="body2" color="text.secondary">
  <Box sx={{height:"100px",
    marginBottom:"30px",
    marginLeft:"10px",
    overflow:"hidden"
  }}>
        
 {data.
description}
</Box>

        </Typography>
      </CardContent>
      <CardActions  sx={{
        position:"absolute", 
        bottom:"0px"
      }}>
      
        <Button size="small" onClick={()=>{dispatch(AddToCart(data))}} sx={{ backgroundColor: '#1E90FF '}} variant='contained' endIcon={<AddShoppingCartIcon/>}>Add To CART</Button>
        <Link to={`/SingleProduct/${data.id}`}>  <Button size="small" color='error'  variant='contained' endIcon={<InfoIcon/>} >More Infro</Button></Link>
      </CardActions>
    </Card>
  );
}