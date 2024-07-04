import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import WelcomePage from '../components/WelcomePage';
import PortfolioTracker from '../components/PortfolioTracker';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders WelcomePage and navigates to PortfolioTracker', () => {
  const { getByText } = render(
    <Router>
      <WelcomePage />
    </Router>
  );

  const enterButton = getByText(/Enter/i);
  fireEvent.click(enterButton);

  // You can add more assertions for the navigation here
});

test('renders PortfolioTracker and fetches NFTs', async () => {
  const { getByPlaceholderText, getByText } = render(
    <Router>
      <PortfolioTracker />
    </Router>
  );

  const input = getByPlaceholderText(/Enter your wallet address/i);
  const button = getByText(/Fetch NFTs/i);

  fireEvent.change(input, { target: { value: 'dummyWallet' } });
  fireEvent.click(button);

  // Add assertions to check for loading state, fetched data, etc.
});
