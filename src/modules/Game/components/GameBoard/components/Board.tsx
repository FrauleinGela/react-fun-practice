import { TBoard } from '../models/board';

export const Board = ({
  board,
  onSelectSquare,
}: {
  board: TBoard;
  onSelectSquare: (rowIndex: number, columnIndex: number) => void;
}) => {
  return (
    <div className='gameboard-container'>
      <ul id='game'>
        {board.map((row, rowIndex) => (
          <ul key={rowIndex}>
            {row.map((cell, columnIndex) => (
              <li key={columnIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, columnIndex)}
                  disabled={cell.value !== null}
                >
                  {cell.value}
                </button>
              </li>
            ))}
          </ul>
        ))}
      </ul>
    </div>
  );
};
