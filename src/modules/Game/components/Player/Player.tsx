import { useState } from 'react';
import { IPlayer } from './models/PlayerItem';

export const Player = ({
  player,
  onChangeName,
  isActive,
}: {
  player: IPlayer;
  isActive: boolean;
  onChangeName(newPlayerName: string, playerId: string): void;
}) => {
  console.log('player');
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(player.name);

  const handleEditName = () => {
    if (isEditing) {
      onChangeName(playerName, player.symbol);
    }
    setIsEditing((isEditing) => !isEditing);
  };

  const handleInputChange = (value: string) => {
    setPlayerName(value);
  };

  let editedPlayerName: JSX.Element = (
    <span className='player-name'>{playerName}</span>
  );
  if (isEditing) {
    editedPlayerName = (
      <input
        type='text'
        value={playerName}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        <span className='player-symbol'> ({player.symbol})</span>{' '}
        {editedPlayerName}
        <button onClick={handleEditName}>{isEditing ? 'Save' : 'Edit'}</button>
      </span>
    </li>
  );
};
