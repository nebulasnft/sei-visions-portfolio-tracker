import { fetchNFTs, fetchNFTDetails } from '../api';
import axios from 'axios';

jest.mock('axios');

describe('API tests', () => {
  test('fetchNFTs returns data', async () => {
    const data = [{ id: 1, name: 'NFT1' }];
    axios.get.mockResolvedValue({ data });

    const result = await fetchNFTs('dummyWallet');
    expect(result).toEqual(data);
  });

  test('fetchNFTDetails returns data', async () => {
    const data = { id: 1, name: 'NFT1', description: 'Description', price: '100' };
    axios.get.mockResolvedValue({ data });

    const result = await fetchNFTDetails(1);
    expect(result).toEqual(data);
  });
});
