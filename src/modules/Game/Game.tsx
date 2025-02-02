import { useState } from 'react';
import { Player } from './components/Player/Player';
import { PLAYERS, IPlayers } from './data/players';
import { Section } from '../../common/components/Section';
import { GameBoard } from './components/GameBoard/GameBoard';
import { PlayerSymbol } from './models/symbol';
import { IPlayer } from './components/Player/models/PlayerItem';

export const Game = () => {
  const [players, setPlayers] = useState<IPlayers>({ ...PLAYERS });
  const [activePlayer, setActivePlayer] = useState<IPlayer>();
  const handlePlayerNameChange = (
    newName: string,
    playerId: PlayerSymbol
  ): void => {
    setPlayers((prev) => {
      const newPlayers = {
        ...players,
        [playerId]: {
          ...prev[playerId],
          name: newName,
        },
      };
      return newPlayers;
    });
  };

  const handleActivePlayer = (player: IPlayer) => {
    setActivePlayer(player);
  };

  return (
    <>
      <Section title='Game board' id='game-board'>
        <div id='game-container'>
          <ul id='players' className='highlight-player'>
            {Object.keys(players).map((key) => {
              const playerKey = key as PlayerSymbol;
              return (
                <Player
                  key={playerKey}
                  player={players[playerKey]}
                  isActive={activePlayer?.symbol === players[playerKey].symbol}
                  onChangeName={handlePlayerNameChange}
                />
              );
            })}
          </ul>
          <GameBoard
            players={players}
            onActivePlayer={(player) => handleActivePlayer(player)}
          />
        </div>
      </Section>
    </>
  );
};
