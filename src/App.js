import "bootstrap/dist/css/bootstrap.min.css";

import {Container, Form, } from "react-bootstrap";


import { useState } from 'react';
import './App.css';
import Img from './components/Img'

function App() {

  //STATE
  const [chainId, setchainId] = useState("")
  const [collectionAdress, setcollectionAdress] = useState("")
  const [collection, setCollection] = useState({})

  // //UseEffect
  // useEffect(() => {
 
  //   getApi();
  // }, []);

  //apikey

  const apiKey = "ckey_99eb99abfb544235823be4803af";
  

  //API

const apiCovalent = `https://api.covalenthq.com/v1/${chainId}/nft_market/collection/${collectionAdress}/?&key=${apiKey}`



const getApi = async ()=>{

  try {

    const res = await fetch(apiCovalent)
   const appCollection = await res.json();
   console.log(appCollection.data.items[0].collection_name);
   console.log(appCollection.data.items[0].third_nft_image);
   console.log(appCollection.data.items[0].second_nft_image);
   console.log(appCollection.data.items[0].first_nft_image);
   console.log(appCollection.data.items[0].fifth_nft_image);
   console.log(appCollection.data.items[0].collection_ticker_symbol);
   console.log(appCollection.data.items[0].quote_currency);
   setCollection(appCollection.data.items[0])
   
    
  } catch (error) {
    console.log(error)
    
  }
}




//handle submit

const handleSubmit = (e) => {
  e.preventDefault();
  getApi()
 
  
  
//   const filtrado = collection.find((fotos)=>fotos.collection_name)
//  console.log(filtrado)


  

 

};

  return (
    <div className="container">
     
     <h1 className="text-center m-3">NFT Collections</h1>

     
    


      <Form className="container" style={{ width: "30rem" }}  onSubmit={handleSubmit}>
  <Form.Group className="my-3">
    
    <Form.Control type="text" placeholder='Ingrese el Chain ID' onChange={(e)=>setchainId(e.target.value)} />
    
  </Form.Group>

  <Form.Group className="my-3">
  
    <Form.Control type="text" placeholder='Ingrese el Collection Adress' onChange={(e)=>setcollectionAdress(e.target.value)} />
  </Form.Group>
  <button className="btn btn-rosa " type="submit">
   Buscar
  </button>
</Form>

<Container className="text-center">
<Img collection={collection}></Img>
</Container>




    </div>
  );
}

export default App;
