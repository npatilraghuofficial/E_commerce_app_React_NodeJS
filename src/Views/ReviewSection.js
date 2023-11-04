import React from "react";
import { useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "react-animated-3d-card";

import { Row, Col } from "react-bootstrap";
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';



export default function DividerStack() {
  const isMediumScreen = useMediaQuery("(min-width: 600px)");
  const itemsToShow = isMediumScreen ? 7 : 3;

  return (
    <>
      <br />
      <div className="container over">
        <div className="row">
          <h3>Comments and Reviews</h3>
          {/* <a href="#" id="view" className="d-flex justify-content-end">
            View all
          </a> */}
        </div>
        <h6>See what's popular across thousands of Events</h6>

        <br></br>
        <div style={{ overflow: "hidden", maxHeight: "400px" }}>
          <div
            style={{
              overflow: "auto",
              height: "100%",
              width: "100%", 
              scrollbarWidth: "none", 
              WebkitOverflowScrolling: "touch", 
            }}
          >
            <Grid
              container
              justifyContent="space-around"
              alignItems="center"
              spacing={{ xs: 20, md: 26 }}
              columns={{ xs: 20, sm: 20, md: 20 }}
            >
              {listItems.slice(0, itemsToShow)}
            </Grid>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
const reviews = [
  {
    reviewerName: "Alice Smith",
    reviewerPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuEI6hF4fjLleNmCa3eGJ0M6eLNcWXU2GtaEgNEWXjJw&s", // Replace with the actual photo URL
    lastPurchaseDate: "2023-11-30",
    rating: 5, // Out of 5 stars
    comment: "I bought this product during the Black Friday Sale, and I'm extremely satisfied with it. The online and in-store options made it convenient for me!",
    productId: 2, // If you have a product ID
    helpfulVotes: 45, // Number of helpful votes from other users
    notHelpfulVotes: 0, // Number of not helpful votes from other users
    userUploadedPhotos: [
      "https://m.media-amazon.com/images/I/71mDDeJQUnL._AC_UL320_.jpg", // Replace with actual photo URLs
      "ttps://m.media-amazon.com/images/I/71mDDeJQUnL._AC_UL320_.jpg",
      "ttps://m.media-amazon.com/images/I/71mDDeJQUnL._AC_UL320_.jpg",
    ],
  },
  {
    reviewerName: "John Doe00",
    reviewerPhoto: "https://m.media-amazon.com/images/I/71mDDeJQUnL._AC_UL320_.jpg", // Replace with the actual photo URL
    lastPurchaseDate: "2023-10-01",
    rating: 4, // Out of 5 stars
    comment: "I purchased this product during the Big Sale Day, and I'm quite happy with my purchase. The quality is great, and the discounts were amazing!",
    productId: 1, // If you have a product ID
    helpfulVotes: 23, // Number of helpful votes from other users
    notHelpfulVotes: 2, // Number of not helpful votes from other users
    userUploadedPhotos: [
      "user-photo-1.jpg", // Replace with actual photo URLs
      "user-photo-2.jpg",
    ],
  },
  {
    reviewerName: "John Doe45",
    reviewerPhoto: "https://m.media-amazon.com/images/I/71mDDeJQUnL._AC_UL320_.jpg", // Replace with the actual photo URL
    lastPurchaseDate: "2023-10-01",
    rating: 1, // Out of 5 stars
    comment: "I purchased this product during the Big Sale Day, and I'm quite happy with my purchase. The quality is great, and the discounts were amazing!",
    productId: 1, // If you have a product ID
    helpfulVotes: 23, // Number of helpful votes from other users
    notHelpfulVotes: 2, // Number of not helpful votes from other users
    userUploadedPhotos: [
      "user-photo-1.jpg", // Replace with actual photo URLs
      "user-photo-2.jpg",
    ],
  },
  {
    reviewerName: "John Doe33",
    reviewerPhoto: "https://m.media-amazon.com/images/I/71mDDeJQUnL._AC_UL320_.jpg", // Replace with the actual photo URL
    lastPurchaseDate: "2023-10-01",
    rating: 2, // Out of 5 stars
    comment: "I purchased this product during the Big Sale Day, and I'm quite happy with my purchase. The quality is great, and the discounts were amazing!",
    productId: 1, // If you have a product ID
    helpfulVotes: 23, // Number of helpful votes from other users
    notHelpfulVotes: 2, // Number of not helpful votes from other users
    userUploadedPhotos: [
      "user-photo-1.jpg", // Replace with actual photo URLs
      "user-photo-2.jpg",
    ],
  },
  // Add more reviews for other products and events
];

// Each review object in the 'reviews' array corresponds to a review for a specific product or event.

const listItems = reviews.map((item) => (
  <Grid item xs={2} sm={4} md={4} key={item.title}>
  <Card
    style={{
      overflow: "hidden",
      width: "300px",
      height: "220px",
      cursor: "pointer",
      backgroundSize: 'cover', 
      backgroundSize: 'cover', 
    backgroundColor: "#f5f5f9", 
    border: "2px solid black", 
    }}
  >


<CardContent>
  <Row className="mb-3">
    <Col xs={12} md={2}>
      <img src={item.reviewerPhoto} alt="Reviewer" className="img-thumbnail" />
     
    </Col>
    <Col xs={12} md={10}>
      <div className="d-flex justify-content-between">
        <Badge pill bg={item.bagde} className="me-2">
          {item.rating} Stars
        </Badge>
        <small>Last Purchase: {item.lastPurchaseDate}</small>
      </div>
      <h5 className="mt-2">{item.reviewerName}</h5>
      <p>{item.comment}</p>
      <div className="d-flex justify-content-between mt-2">
        <small>{item.helpfulVotes} people found this helpful</small>
        <small>{item.notHelpfulVotes} people found this not helpful</small>
      </div>
      <Row xs={10} md={2}>
      {item.userUploadedPhotos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`User Photo ${index + 1}`}
          className="img-thumbnail mt-2"
        />
      ))}
      </Row>
    </Col>
  </Row>
</CardContent>




  </Card>
</Grid>
  ));



{/* <Grid item xs={2} sm={4} md={4} key={item.title}> */}