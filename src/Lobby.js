import React from "react";
import { useNavigate } from "react-router-dom";

const Lobby = ({
  users,
  currentUser,
  setGames,
  games,
  waitingList,
  setWaitingList,
}) => {
  const navigate = useNavigate();

  const handlePlay = (opponent) => {
    if (games.length >= 1) {
      setWaitingList([...waitingList, currentUser]);
    } else {
      setGames([...games, [currentUser, opponent]]);
      navigate(`/game/${currentUser}/${opponent}`);
    }
  };

  return (
    <div className="lobby-container">
      <h2>Lobby</h2>
      <ul>
        {users
          .filter((user) => user !== currentUser)
          .map((user) => (
            <li key={user}>
              {user} <button onClick={() => handlePlay(user)}>Play</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Lobby;
