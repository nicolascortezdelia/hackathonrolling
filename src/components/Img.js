import React from 'react';

const Img = ({collection}) => {
    return (
        <div>
            <h1 >{collection.collection_name}</h1>
            {/* <img src={collection.second_nft_image} alt=""/> */}
            <img src={collection.first_nft_image} width='100px'alt=""/>
            <img src={collection.second_nft_image} width='100px'alt=""/>
            <img src={collection.third_nft_image} width='100px'alt=""/>
            <img src={collection.fourth_nft_image} width='100px'alt=""/>
            <img src={collection.fifth_nft_image} width='100px'alt=""/>
           
        </div>
    );
};

export default Img;