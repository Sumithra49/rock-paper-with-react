import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Game from "./GameRoom";
import Leaderboard from "./Leaderboard";
import Lobby from "./Lobby";
import Login from "./Login";

function App() {
  const [users, setUsers] = useState([]);
  const [games, setGames] = useState([]);
  const [waitingList, setWaitingList] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [scores, setScores] = useState({});

  useEffect(() => {
    const initialScores = {};
    users.forEach((user) => {
      if (!initialScores[user]) {
        initialScores[user] = 0;
      }
    });
    setScores(initialScores);
  }, [users]);

  const handleLogin = (username) => {
    if (!users.includes(username)) {
      setUsers([...users, username]);
    }
    setCurrentUser(username);
  };

  const handleGameEnd = (winner, loser) => {
    setScores({
      ...scores,
      [winner]: scores[winner] + 1,
      [loser]: scores[loser],
    });
    setGames(games.slice(1));
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/lobby"
            element={
              <Lobby
                users={users}
                currentUser={currentUser}
                setGames={setGames}
                games={games}
                waitingList={waitingList}
                setWaitingList={setWaitingList}
              />
            }
          />
          <Route
            path="/game/:player1/:player2"
            element={<Game onGameEnd={handleGameEnd} />}
          />
          <Route
            path="/leaderboard"
            element={<Leaderboard scores={scores} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
