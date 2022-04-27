import React from "react";
import { Card } from "react-bootstrap";
import "./img.css";

const Img = ({ collection }) => {
  return (
    <>
    
    
      <h4 className="my-3">{collection.collection_name}</h4>
      {/* <img src={collection.second_nft_image} alt=""/> */}
      <div className="d-flex justify-content-center my-2 ">
      <Card style={{ width: "30rem" }} className="cardbg ">
        <Card.Img src={collection.first_nft_image} />
      </Card>

      </div>
      <div className="d-flex justify-content-center my-2" >
      <Card style={{ width: "30rem" }} className="cardbg">
        <Card.Img src={collection.second_nft_image} />
      </Card>

      </div>
      <div className="d-flex justify-content-center my-2">
      <Card style={{ width: "30rem" }} className="cardbg">
        <Card.Img src={collection.third_nft_image}/>
      </Card>

      </div>
      <div className="d-flex justify-content-center my-2">
      <Card style={{ width: "30rem" }} className="cardbg">
        <Card.Img src={collection.fourth_nft_image} />
      </Card>


      </div>
      <div className="d-flex justify-content-center my-2">

      </div>
      <div className="d-flex justify-content-center my-2">
      <Card style={{ width: "30rem" }} className="cardbg">
        <Card.Img src={collection.fifth_nft_image} />
      </Card>

      </div>

      
      
    
      
      
    
    </>
  );
};

export default Img;
