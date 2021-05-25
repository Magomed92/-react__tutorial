import React from 'react';
import './Resources.scss';
import { IconButton } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';

export const Resources = () => {
  const array = [
    {
      id: 0,
      title: 'React',
      content: [
        {
          id: 0,
          description: 'Что такое компонент ?',
          text: 'qweqweqwe',
        },
        {
          id: 1,
          description: 'Что такое хуки ?',
          text: 'qweqweqwe',
        },
        {
          id: 2,
          description: ' В чём отличие функционального компонента от классового ?',
          text: 'qweqweqwe',
        },
      ],
    },

    {
      id: 1,
      title: 'JavaScript',
      content: [
        {
          id: 1,
          description: 'Что такое замыкание  ?',
          text: 'qweqweqwe',
        },
        {
          id: 2,
          description: 'Как выполнить запрос на сервер ?',
          text: 'qweqweqwe',
        },
      ],
    },
  ];

  return (
    <div className="resources">
      {array.map((item) => (
        <div key={item.id} className="white__block">
          <h3>{item.title}</h3>
          <div className="resources__content">
            {item.content.map((el) => (
              <Link key={el.id} to={`/resources/${el.id}`}>
                <div>
                  <span key={el.id}>{el.description}</span>
                  <IconButton>
                    <ArrowForwardIosIcon fontSize="small" />
                  </IconButton>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
