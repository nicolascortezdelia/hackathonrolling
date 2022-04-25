
import { useState } from 'react';
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
      <form onSubmit={handleSubmit}>
        <label>Chain Id</label>
        <input type="text" placeholder='Ingrese el Chain ID' onChange={(e)=>setchainId(e.target.value)}/>
        <label>Collection Adress</label>
        <input type="text" placeholder='Ingrese el Collection Adress' onChange={(e)=>setcollectionAdress(e.target.value)}/>
        <button></button>


      </form>
      
    </div>
  );
}

export default App;
