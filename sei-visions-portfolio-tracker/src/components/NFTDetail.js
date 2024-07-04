import React from 'react';

const NFTDetail = ({ nft }) => {
  return (
    <div>
      <h2>{nft.name}</h2>
      <p>{nft.description}</p>
      <p>Price: {nft.price}</p>
    </div>
  );
};

export default NFTDetail;
