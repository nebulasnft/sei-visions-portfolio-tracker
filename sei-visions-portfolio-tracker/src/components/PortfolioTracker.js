import React, { useState } from 'react';
import NFTList from './NFTList';
import NFTDetail from './NFTDetail';
import { fetchNFTs, fetchNFTDetails } from '../api';

const PortfolioTracker = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [nfts, setNfts] = useState([]);
  const [selectedNft, setSelectedNft] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFetchNFTs = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchNFTs(walletAddress);
      setNfts(data);
    } catch (e) {
      setError('Failed to fetch NFTs. Please check the wallet address or network connection.');
    }
    setLoading(false);
  };

  const handleNftClick = async (nftId) => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchNFTDetails(nftId);
      setSelectedNft(data);
    } catch (e) {
      setError('Failed to fetch NFT details. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Portfolio Tracker</h1>
      <input
        type="text"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
        placeholder="Enter your wallet address"
      />
      <button onClick={handleFetchNFTs} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch NFTs'}
      </button>
      {error && <p>{error}</p>}
      <NFTList nfts={nfts} onNftClick={handleNftClick} />
      {selectedNft && <NFTDetail nft={selectedNft} />}
    </div>
  );
};

export default PortfolioTracker;
