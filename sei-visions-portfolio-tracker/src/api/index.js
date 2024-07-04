import axios from 'axios';

const SEI_RPC_URL = 'https://rpc.sei-apis.com';
const MRKT_EXCHANGE_URL = 'https://mrkt.exchange/api';

export const fetchNFTs = async (walletAddress) => {
  const response = await axios.get(`${SEI_RPC_URL}/nfts/${walletAddress}`);
  return response.data;
};

export const fetchNFTDetails = async (nftId) => {
  const response = await axios.get(`${MRKT_EXCHANGE_URL}/nft/${nftId}`);
  return response.data;
};
