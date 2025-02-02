import { PlayerSymbol } from "../../../models/symbol";

interface Cell {
  value: PlayerSymbol | null;
}

export type TBoard = Cell[][];
