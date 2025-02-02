import { useEffect, useState } from 'react';
import { INITIAL_BOARD } from '../../data/board';
import { Board } from './components/Board';
import { IPlayers } from '../../data/players';
import { IPlayer } from '../Player/models/PlayerItem';
import { WINNING_OPTIONS } from '../../data/winningOptions';
import { TBoard } from './models/board';
import { GameOver } from '../GameOverModal/GameOverModal';

interface IGameTurn {
  square: {
    row: number;
    col: number;
  };
  player: IPlayer;
}

const getBoard = (gameTurns: IGameTurn[], initialBoard: TBoard): TBoard => {
  const board: TBoard = structuredClone(initialBoard);
  gameTurns.forEach((turn) => {
    const { square, player } = turn;
    const { row, col } = square;
    board[row][col] = { value: player.symbol };
  });
  return board;
};

const getWinner = (board: TBoard, players: IPlayers): IPlayer | null => {
  let winner: IPlayer | null = null;
  WINNING_OPTIONS.forEach((wopt) => {
    const firstSquare = board[wopt[0].row][wopt[0].col].value;
    const secondSquare = board[wopt[1].row][wopt[1].col].value;
    const thirdSquare = board[wopt[2].row][wopt[2].col].value;

    if (
      firstSquare &&
      secondSquare &&
      thirdSquare &&
      firstSquare === secondSquare &&
      secondSquare === thirdSquare
    ) {
      winner = players[firstSquare];
    }
  });

  return winner;
};

const getActivePlayer = (
  gameTurns: IGameTurn[],
  players: IPlayers
): IPlayer => {
  let currentPlayer = players.X;
  if (
    gameTurns.length > 0 &&
    gameTurns[gameTurns.length - 1].player.symbol === 'X'
  ) {
    currentPlayer = players.O;
  }
  return currentPlayer;
};

export const GameBoard = ({
  players,
  onActivePlayer,
}: {
  players: IPlayers;
  onActivePlayer: (player: IPlayer) => void;
}) => {
  const [gameTurns, setGameTurns] = useState<IGameTurn[]>([]);
  const board: TBoard = getBoard(gameTurns, INITIAL_BOARD);
  const activePlayer: IPlayer = getActivePlayer(gameTurns, players);
  const winner: IPlayer | null = getWinner(board, players);
  const isDraft: boolean = !winner && gameTurns.length >= 9;
  console.log('Boardgame ');
  useEffect(() => {
    onActivePlayer(activePlayer);
    console.log('ac');
  }, [activePlayer]);

  const handleSelectSquare = (rowIndex: number, columnIndex: number) => {
    const newTurnGame = {
      player: activePlayer,
      square: { row: rowIndex, col: columnIndex },
    };
    setGameTurns((prev) => [...prev, newTurnGame]);
  };

  const handleGameRestart = () => {
    setGameTurns([]);
  };

  return (
    <>
      <Board board={board} onSelectSquare={handleSelectSquare} />
      {(isDraft || winner) && (
        <GameOver winner={winner} onRestart={handleGameRestart} />
      )}
    </>
  );
};
