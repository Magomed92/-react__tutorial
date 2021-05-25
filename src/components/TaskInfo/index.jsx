import React from 'react';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import './TaskInfo.scss';
const statuses = {
  complete: { text: 'выполнено', icon: <DoneIcon /> },
  decline: { text: 'отклонено', icon: <CloseIcon /> },
  pending: { text: 'ожидается', icon: <HourglassEmptyIcon /> },
};

export const TaskInfo = ({ task }) => {
  return (
    <div className="task">
      <div className={`task__icon task__icon--${task.status}`}>{statuses[task.status].icon}</div>
      <div>
        <p>
          Задание #{task.number} —{' '}
          <span className="task__status">{statuses[task.status].text}</span>
        </p>
        <span>
          Отправлено:{task.sentAt} — Одобрено: {task.responseAt}
        </span>
      </div>
    </div>
  );
};
