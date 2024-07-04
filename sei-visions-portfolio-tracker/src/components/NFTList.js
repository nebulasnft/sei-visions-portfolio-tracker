import React from 'react';

const NFTList = ({ nfts, onNftClick }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {nfts.map((nft) => (
        <div key={nft.id} onClick={() => onNftClick(nft.id)} style={{ margin: '10px', cursor: 'pointer' }}>
          <img src={nft.image} alt={nft.name} style={{ width: '100px', height: '100px' }} />
          <p>{nft.name}</p>
        </div>
      ))}
    </div>
  );
};

export default NFTList;
