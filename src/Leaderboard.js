import React from "react";

const Leaderboard = ({ scores }) => {
  const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      <ul>
        {sortedScores.map(([user, score]) => (
          <li key={user}>
            {user}: {score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
