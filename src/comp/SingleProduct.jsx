import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MDBBtn } from 'mdb-react-ui-kit'
import { useDispatch } from 'react-redux';

import { Link } from "react-router-dom"; 

import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";
import { AddToCart } from "../features/Card/cartslice";

function SingleProduct() {
  const dispatch = useDispatch();  
    const productid= useParams()
    const {id} = productid
    const [singledata ,  setSingledata] =useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)  // Correct: Using backticks for template literals
          .then((res) => {
            return res.json();
          })
          .then((result) => {
                console.log(result)
                setSingledata(result)


          });
      }, []);



  return (
    <MDBContainer className="my-5  ">
      <MDBRow className="justify-content-center ">
        <MDBCol md="3" className="">
          <MDBCard className="text-black  square border border-3  ">
            <MDBIcon  size="lg" className="px-3 pt-3 pb-2 " />
            <MDBCardImage
              src={singledata.image}
              position="top"
            
            />
            <MDBCardBody>
              <div className="text-center">
                <MDBCardTitle> {singledata.title}</MDBCardTitle>
                <p className="text-muted mb-4">{singledata.category}</p>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <span>Price</span>
                  <span>{singledata.price}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Rating</span>
                  <span>{singledata.rating && singledata.rating.rate}/5  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Stock</span>
                  <span>{singledata.rating && singledata.rating.count}</span>
                </div>
              </div>
              <div className="d-flex justify-content-between total font-weight-bold mt-4">
              <MDBBtn  onClick={()=> { dispatch(AddToCart(singledata))}} color='danger'>ADD TO CART</MDBBtn>
             <Link to={'/'}><MDBBtn  color='danger'>Cancle</MDBBtn> </Link>
               
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SingleProduct;