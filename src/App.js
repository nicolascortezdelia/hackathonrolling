
import { useState } from 'react';
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import './App.css';

function App() {

  //STATE
  const [chainId, setchainId] = useState("")
  const [collectionAdress, setcollectionAdress] = useState("")

  //UseEffect
  useEffect(() => {
    getAp();
    getApi();
  }, []);

  //apikey

  const apiKey = "ckey_99eb99abfb544235823be4803af";

  //API

const apiCovalent = `https://api.covalenthq.com/v1/${chainId}/nft_market/collection/${collectionAdress}/?&key=${apiKey}`

const getApi = async ()=>{

  try {

    const res = await fetch(apiCovalent)
    console.log(res)

    
  } catch (error) {
    console.log(error)
    
  }
}

//handle submit

const handleSubmit = (e) => {
  e.preventDefault();
  

};

  return (
    <div>
      <Form  onSubmit={handleSubmit}>
        <Form.Label>Chain Id</Form.Label>
        <input type="text" placeholder='Ingrese el Chain ID' onChange={(e)=>setchainId(e.target.value)}/>
        <Form.Label>Collection Adress</Form.Label>
        <input type="text" placeholder='Ingrese el Collection Adress' onChange={(e)=>setcollectionAdress(e.target.value)}/>
        <Button></Button>


      </Form >
      
    </div>
  );
}

export default App;
