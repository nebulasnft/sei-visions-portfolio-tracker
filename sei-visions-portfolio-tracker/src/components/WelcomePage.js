import React from 'react';
import { useHistory } from 'react-router-dom';

const WelcomePage = () => {
  const history = useHistory();

  const handleEnter = () => {
    history.push('/portfolio');
  };

  return (
    <div>
      <h1>Welcome to the Sei Visions portfolio tracker</h1>
      <button onClick={handleEnter}>Enter</button>
    </div>
  );
};

export default WelcomePage;
