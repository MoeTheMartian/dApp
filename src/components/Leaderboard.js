import React from 'react';
import './Leaderboard.scss';

const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      <div className="leaderboard-entry">
        <span className="username">User123</span>
        <span className="score">--</span>
      </div>
      {/* More leaderboard entries */}
    </div>
  );
};

export default Leaderboard;
