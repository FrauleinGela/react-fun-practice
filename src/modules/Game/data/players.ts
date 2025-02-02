import { IPlayer } from '../components/Player/models/PlayerItem';
import { PlayerSymbol } from '../models/symbol';

export type IPlayers = {
  [key in PlayerSymbol]: IPlayer;
};

export const PLAYERS: IPlayers = {
  X: {
    symbol: 'X',
    name: 'Player 1',
  },
  O: {
    symbol: 'O',
    name: 'Player 2',
  },
};
