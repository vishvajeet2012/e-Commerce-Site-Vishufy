import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Box } from "@mui/material";
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, deleteCartitem, increaseItemQuantity, removeAllProduct, totalCart } from '../features/Card/cartslice';
import { deleteWhishItem } from "../features/whishlist/whishSlice";
export default function Cart() {

    const CartValue = useSelector((state)=>(state.CartValue.cart))
    const CartPrice = useSelector((state)=>(state.CartValue))
    const dispatch = useDispatch();
    console.log(CartPrice.totalPrice)
    dispatch(totalCart())


  return (
    <section className="vh-50" style={{ backgroundColor: "#ffff" }}>
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <p>
              <span className="h2">Shopping Cart </span>
              {/* <span className="h4">(1 item in your cart)</span> */}
            </p>
            
            {
                CartValue.length === 0 ? <h1 >Your shopping cart is empty...</h1> :
           CartValue.map((value) => (
            
        <div>
              <MDBCard className="mb- p-3 mb-3 bg-light bg-gradient text-dark rounded-5 square border .shadow-2-strong">
              <MDBCardBody className="p-1 " >
                <MDBRow className="align-items-center">
                  <MDBCol md="2">
                    <MDBCardImage
                      fluid
                      src={value.image}
                      alt="Gene ric placeholder image"
                    />
                    <Box className="d-flex justify-content-center " >
                    <MDBIcon    onClick={()=>{dispatch(deleteCartitem(value))}}  className="text-center bg-danger shadow-1-strong p-2 square rounded-circle" fas icon="trash" /></Box>
                  </MDBCol>
                  
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-1">Name</p>
                      <p className="lead fw-normal mb-1">{value.title}</p>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Rating</p>
                      <Rating
  name="text-feedback"
  value={value.rating && value.rating.rate} 
  readOnly
  precision={0.5}
  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
/>
                      
           
                  
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Quantity</p>
                    <div  style={{gap:"10px"}} className="d-flex align-items-center  ">
                      
                      <MDBIcon onClick={()=>{dispatch(decreaseItemQuantity(value))}} fas icon="minus" />
                      <p className="lead fw-normal mb-0">{value.quantity}</p>
                      <MDBIcon onClick={()=>{dispatch(increaseItemQuantity(value))}} fas icon="plus" /></div>
                    </div>
                  </MDBCol>
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Price</p>
                      <p className="lead fw-normal mb-0">₹{value.price}</p>
                    </div>
                    
                  </MDBCol>
                  
                  <MDBCol md="2" className="d-flex justify-content-center">
                    <div>
                      <p className="small text-muted mb-4 pb-2">Total</p>
                      <p className="lead fw-normal mb-0">₹{value.quantity*value.price}</p>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

        </div>
    
    ))
}


        
            <MDBCard className="mb-5">
              <MDBCardBody className="p-4 bg-light bg-gradient text-dark rounded-5 square border ">
                <div className="float-end">
                  <p className="mb-0 me-5 d-flex align-items-center">
                    <span className="small text-muted me-2">Order total:</span>
                    <span className="lead fw-normal">{CartPrice.totalPrice}</span>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>

            <div className="d-flex justify-content-end ">
              <MDBBtn color="light" size="lg" className="me-2">
                Continue shopping
              </MDBBtn>
              <MDBBtn onClick={()=>{dispatch(removeAllProduct())}} size="lg">Remove All</MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>  
  );
}