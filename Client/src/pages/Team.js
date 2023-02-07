import React from 'react';
import './styles/Team.css';
import {
  Container,
  // CardColumns,
  // Card
} from 'react-bootstrap';
import UserCard from '../components/UserCard';




import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import { QUERY_TEAM } from '../utils/queries';

const Team = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { teamId } = useParams();

  const { loading, data } = useQuery(QUERY_TEAM, {
    // Pass the `thoughtId` URL parameter into query to retrieve this thought's data
    variables: { teamId: teamId },
  });

  const team = data?.team || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className='team'>
      <div>
      <header>
      <h1>Viewing {team.name}!</h1>
      <p>{team.description}</p>
      </header>
    </div>
      <Container>

      {team.name === 'Team 1' ? (
        <>
      <h2> Team Members:
        </h2>
        <UserCard />
        </>
        ) : <h2>No Members Yet</h2>}


      </Container>
      </div>
    </>
  );
  };


export default Team;
