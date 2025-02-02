import { ReactNode } from 'react';
import './Header.css';
import { Navigation } from '../../components/Navigation';

export const Header = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header>
        <h1>React Essentials</h1>
      </header>
      <Navigation />
      {children}
    </>
  );
};
