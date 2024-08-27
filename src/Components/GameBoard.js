import React, { useEffect, useState } from "react";
import "../Game.css";
import GameCircle from "./GameCircle";
import Header from "./Header";
import Footer from "./Footer";
import { isDraw, isWinner, getComputerMove } from "../Helper";
import {
  GAME_STATE_PLAYING,
  NO_CIRCLES,
  NO_PLAYER,
  PLAYER_1,
  PLAYER_2,
  GAME_STATE_WIN,
  GAME_STATE_DRAW,
} from "./Constants";

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(NO_CIRCLES).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
  const [winPlayer, setWinPlayer] = useState(NO_PLAYER);

  const initGame = () => {
    setCurrentPlayer(PLAYER_1);
    setGameBoard(Array(NO_CIRCLES).fill(NO_PLAYER));
    setGameState(GAME_STATE_PLAYING);
  }

  const initBoard = () => {
    const circles = [];

    for (let i = 0; i < NO_CIRCLES; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  };

  const circleClicked = (id) => {

    if (gameBoard[id] !== NO_PLAYER) return;
    if (gameState !== GAME_STATE_PLAYING) return;

    if (isWinner(gameBoard, id, currentPlayer)) {
      setGameState(GAME_STATE_WIN);
      setWinPlayer(currentPlayer);
    }

    if (isDraw(gameBoard, id, currentPlayer)) {
      setGameState(GAME_STATE_DRAW);
      setWinPlayer(NO_PLAYER);
    }

    setGameBoard((prev) => {
      return prev.map((circle, pos) => {
        if (pos === id) return currentPlayer;
        return circle;
      });
    });

    setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);

    console.log(gameBoard);
    console.log(currentPlayer);
  };

  useEffect(() => {
    initGame();
  },[]);

  const renderCircle = (id) => {
    return (
      <GameCircle
        key={id}
        id={id}
        className={`player_${gameBoard[id]}`}
        onCircleCliked={circleClicked}
      />
    );
  };

  const onSuggestClick =() =>{
    circleClicked(getComputerMove(gameBoard));
  }

  const onNewGameClick = () => {
    initGame();
  }

  return (
    <>
      <Header
        gameState={gameState}
        currentPlayer={currentPlayer}
        winPlayer={winPlayer}
      />
      <div className="gameBoard">{initBoard()}</div>
      <Footer onSuggestClick={onSuggestClick} onNewGameClick = {onNewGameClick} gameState={gameState}/>
    </>
  );
};

export default GameBoard;
