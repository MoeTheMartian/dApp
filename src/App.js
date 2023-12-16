import React from 'react';
import './App.css';
import Leaderboard from './components/Leaderboard';
import Governance from './components/Governance';
import Lottery from './components/Lottery';
import Staking from './components/Staking';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* You can place a navbar or header content here */}
      </header>
      <main>
        <Leaderboard />
        <Governance />
        <Lottery />
        <Staking />
      </main>
      <footer>
        {/* And a footer here */}
      </footer>
    </div>
  );
}

export default App;
