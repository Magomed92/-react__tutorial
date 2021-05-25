import React from 'react';
import './Task.scss';
import { Link } from 'react-router-dom';
import { TaskInfo } from '../TaskInfo';

const array = [
  {
    id: 0,
    number: 1,
    status: 'complete',
    sentAt: '24.10.2020 ',
    responseAt: '25.10.2020',
  },
  {
    id: 1,
    number: 2,
    status: 'decline',
    sentAt: '24.10.2020 ',
    responseAt: '25.10.2020',
  },
  {
    id: 2,
    number: 3,
    status: 'pending',
    sentAt: '24.10.2020 ',
    responseAt: '25.10.2020',
  },
];

export const Task = () => {
  return (
    <>
      {array.map((item) => (
        <div className="main__task">
          <Link key={item.id} to={`/task/${item.id}`}>
            <TaskInfo task={item} />
          </Link>
        </div>
      ))}
    </>
  );
};
