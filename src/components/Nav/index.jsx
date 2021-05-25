import React from 'react';
import Logo from '../../assets/img/logo.svg';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ListAltIcon from '@material-ui/icons/ListAlt';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Button, ButtonBase } from '@material-ui/core';
import './Nav.scss';
import { Link } from 'react-router-dom';
export const Nav = () => {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">
              <ButtonBase>
                <img alt="logo" src={Logo} />
              </ButtonBase>
            </Link>
          </li>
          <li>
            <Link to="/">
              <ButtonBase>
                <EqualizerIcon fontSize="large" />
              </ButtonBase>
            </Link>
          </li>
          <li>
            <Link to="/resources">
              <ButtonBase>
                <ListAltIcon fontSize="large" />
              </ButtonBase>
            </Link>
          </li>
          <li>
            <Link to="/videos">
              <ButtonBase>
                <YouTubeIcon fontSize="large" />
              </ButtonBase>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
