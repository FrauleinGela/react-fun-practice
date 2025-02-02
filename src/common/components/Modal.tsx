import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

export const Modal = ({ children }: { children: ReactNode }) => {
  const bodyElement: HTMLElement = document.getElementById('modal')!;
  return createPortal(<div className='modal'>{children}</div>, bodyElement);
};
