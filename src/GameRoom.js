import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const choices = ["rock", "paper", "scissors"];

const determineWinner = (choice1, choice2) => {
  if (choice1 === choice2) return "draw";
  if (
    (choice1 === "rock" && choice2 === "scissors") ||
    (choice1 === "scissors" && choice2 === "paper") ||
    (choice1 === "paper" && choice2 === "rock")
  ) {
    return "player1";
  } else {
    return "player2";
  }
};

const Game = ({ onGameEnd }) => {
  const { player1, player2 } = useParams();
  const [player1Choice, setPlayer1Choice] = useState(null);
  const [player2Choice, setPlayer2Choice] = useState(null);
  const navigate = useNavigate();

  const handleChoice = (player, choice) => {
    if (player === "player1") {
      setPlayer1Choice(choice);
    } else {
      setPlayer2Choice(choice);
    }

    if (player1Choice && player2Choice) {
      const winner = determineWinner(player1Choice, player2Choice);
      if (winner === "player1") {
        onGameEnd(player1, player2);
      } else if (winner === "player2") {
        onGameEnd(player2, player1);
      }
      navigate("/lobby");
    }
  };

  return (
    <div className="game-container">
      <h2>Rock-Paper-Scissors</h2>
      <div>
        <h3>{player1}</h3>
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleChoice("player1", choice)}>
            {choice}
          </button>
        ))}
      </div>
      <div>
        <h3>{player2}</h3>
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleChoice("player2", choice)}>
            {choice}
          </button>
        ))}
      </div>
      {player1Choice && player2Choice && (
        <div>
          <h4>
            {player1} chose {player1Choice}
          </h4>
          <h4>
            {player2} chose {player2Choice}
          </h4>
          <h4>
            {determineWinner(player1Choice, player2Choice) === "draw"
              ? "It's a draw!"
              : `${
                  determineWinner(player1Choice, player2Choice) === "player1"
                    ? player1
                    : player2
                } wins!`}
          </h4>
        </div>
      )}
    </div>
  );
};

export default Game;
