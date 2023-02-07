import React from 'react';
import './styles/User.css';
import Default from './images/default.png'

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER } from '../utils/queries';

const User = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { userId } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    // pass URL parameter
    variables: { userId: userId },
  });

  const user = data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
      <div className="user">
        <h3 className="card-header text-light p-2 m-0">
          {user.name}<br></br> 
          <img src= {Default} alt='default'/><br></br>
          <span style={{ fontSize: '1rem' }}>
            {user.title}
          </span>
        </h3>
        <div className=" py-4 info ">
          <p><a href={user.portfolioLink} target="_blank" rel="noreferrer">View My Portfolio</a>
          </p>
          <blockquote
            className="p-4"
          >
            {user.description}
          </blockquote>
        </div>
        </div>
  );
};

export default User;