import { useState } from 'react';
import { useEffect } from 'react';
import { NavigationLink } from '../navigationLink';
import './navigationPanel.navigationMobile.css';

export const NavigationPanel = ({ panelOptions, showMenu, setShowMenu }) => {
  let positionPanel = showMenu ? 'left-menu' : 'left-full-menu';
  let opacityBlackout = showMenu ? 'mobile-menu__mask-opacity-1' : 'mobile-menu__mask-opacity-0';
  let positionBlackout = showMenu ? 'mobile-menu__mask-left-0' : 'mobile-menu__mask-right';

  return (
    <>
      <div className={`mobile-menu__mask ${opacityBlackout} ${positionBlackout}`} onClick={() => setShowMenu(false)}>
        <ul className={`mobile-menu__ul ${positionPanel}`}>
          {panelOptions.map((option) => {
            return (
              <li key={option} className="mobile-menu__li">
                <NavigationLink text={option} isButton={false} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
