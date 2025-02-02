import { IPlayer } from '../Player/models/PlayerItem';
import { Modal } from '../../../../common/components/Modal';

export const GameOver = ({
  winner,
  onRestart,
}: {
  winner: IPlayer | null;
  onRestart: () => void;
}) => {
  return (
    <>
      <Modal>
        <div id='game-over'>
          <h2>Game Over</h2>
          <p>{winner ? `Winner: ${winner.name}` : "it's a draft"} </p>
          <button onClick={onRestart}>Play again</button>
        </div>
      </Modal>
    </>
  );
};
