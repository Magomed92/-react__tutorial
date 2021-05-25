import React from 'react';
import { GlobalButton } from '../../components/GlobalButton';
import { Task } from '../../components/Task';
import './Activities.scss';
export const Activities = () => {
  return (
    <div className="activities">
      <div className="tasks">
        <h3>Задания</h3>
        <Task />
        <div className="task__btn">
          <GlobalButton />
        </div>
      </div>
      <div className="complete">
        <div className="complete__title">
          <p>Выполнено заданий:</p>
        </div>
        <div className="complete__result">
          <p>2/10</p>
        </div>
      </div>
    </div>
  );
};
