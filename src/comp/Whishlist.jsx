import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../features/Card/cartslice";
import { Link } from "react-router-dom"; 
import { deleteWhishItem } from "../features/whishlist/whishSlice";

function Whishlist() {
  const whishlistdata = useSelector((state) => state.whistlistdata.whishh);
  console.log(whishlistdata);

  const dispatch = useDispatch(); // Correct useDispatch

  return (
    <MDBContainer fluid>
      {whishlistdata.length === 0 ? (
        <h1 style={{textAlign:'center',marginTop:"20px ", color: 'black'}}>Your wishlist is empty.</h1>
      ) : ( 
        whishlistdata.map((value) => (
          <MDBRow className="justify-content-center mb-0" key={value.id}>
            <MDBCol md="7" xl="7">
              <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol md="12" lg="3" className="mb-1 mb-lg-0">
                      <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image rounded hover-zoom hover-overlay"
                      >
                        <MDBCardImage
                          src={value.image}
                          fluid
                          className="w-100"
                        />
                        <a href="#!">
                          <div
                            className="mask"
                            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                          ></div>
                        </a>
                      </MDBRipple>
                    </MDBCol>
                    <MDBCol md="6">
                      <h5>{value.title}</h5>
                      <div className="d-flex flex-row">
                        <span> Rating: {value.rating && value.rating.rate}</span>
                      </div>
                      <div className="mt-1 mb-0 text-muted small">
                        <span>{value.category}</span>
                      </div>
                      <div className="mb-2 text-muted small">
                        <span>{value.description}</span>
                      </div>
                    </MDBCol>
                    <MDBCol md="6" lg="3" className="border-sm-start-none border-start">
                      <div className="d-flex flex-row align-items-center mb-1">
                        <h4 className="mb-1 me-1">₹{value.price}</h4>
                        <span className="text-danger">
                          <s> 50% Discount</s>
                        </span>
                      </div>
                      <h6 className="text-success">Free Shipping</h6>
                      <div className="d-flex flex-column mt-4">
                        <Link to={`/SingleProduct/${value.id}`}>
                          <MDBBtn outline color="primary">
                            Details
                          </MDBBtn>
                        </Link>
                        <MDBBtn onClick={() => dispatch(AddToCart(value))} outline color="primary" size="sm" className="mt-2">
                          ADD TO CART
                        </MDBBtn>
                        <MDBBtn onClick={() => dispatch(deleteWhishItem(value))} color="danger" size="sm" className="mt-2">
                          Delete
                        </MDBBtn>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        ))
      )}
    </MDBContainer>
  );
}

export default Whishlist;
