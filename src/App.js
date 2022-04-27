import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import "./App.css";
import Data from "./components/Data";

function App() {
  //STATE
  const [chainId, setchainId] = useState("");
  const [collectionAdress, setcollectionAdress] = useState("");
  const [collection, setCollection] = useState({});

  //apikey

  const apiKey = "ckey_99eb99abfb544235823be4803af";

  //API

  const apiCovalent = `https://api.covalenthq.com/v1/${chainId}/nft_market/collection/${collectionAdress}/?&key=${apiKey}`;

  const getApi = async () => {
    try {
      const res = await fetch(apiCovalent);
      const appCollection = await res.json();

      setCollection(appCollection.data.items[0]);
    } catch (error) {
      console.log(error);
    
    }
  };

  //handle submit

  const handleSubmit = (e) => {
    e.preventDefault();
    getApi();
   
    

    
  };

  return (
    <div className="container">
      <h1 className="text-center m-3">NFT Collections</h1>

    

      <Form
        className="container"
        style={{ width: "35rem", height: "35rem" }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="my-3">
          <Form.Control
            type="text"
            placeholder="Ingrese el Chain ID"
            onChange={(e) => setchainId(e.target.value)}
          
          />
        </Form.Group>

        <Form.Group className="my-3">
          <Form.Control
            type="text"
            placeholder="Ingrese el Collection Adress"
            onChange={(e) => setcollectionAdress(e.target.value)}
          />
        </Form.Group>
        <button className="btn btn-rosa " type="submit">
          Buscar
        </button>
      </Form>

      {/* display data */}
      <Data collection={collection}></Data>

      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
