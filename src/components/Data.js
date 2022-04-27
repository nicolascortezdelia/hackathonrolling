import React from 'react';

const Data = ({collection}) => {
    return (
        <div>
            <h2>Collection name: {collection.collection_name}</h2>
            <h2>Ticker: {collection.collection_ticker_symbol}</h2>
            <h2>Currency: {collection.quote_currency}</h2>
           
            <img src={collection.first_nft_image} width='100px'alt=""/>
            <img src={collection.second_nft_image} width='100px'alt=""/>
            <img src={collection.third_nft_image} width='100px'alt=""/>
            <img src={collection.fourth_nft_image} width='100px'alt=""/>
            <img src={collection.fifth_nft_image} width='100px'alt=""/>
           
        </div>
    );
};

export default Data;