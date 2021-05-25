import React from 'react';
import './GlobalButton.scss';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
export const GlobalButton = () => {
  return (
    <div className="btn">
      <Button variant="contained" color="primary" disableElevation>
        <AddIcon /> Отправить задание
      </Button>
    </div>
  );
};
