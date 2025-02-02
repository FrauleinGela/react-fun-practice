import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
    <nav id="navigation">
      <div className="block">
      <ul>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Essentials
        </NavLink>
        <NavLink
          to='game'
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Game
        </NavLink>
      </ul>
      </div>
    </nav>
    </>
  );
};
