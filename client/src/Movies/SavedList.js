import React from 'react';
import { useHistory, NavLink } from 'react-router-dom'

const SavedList = props => {
  const history = useHistory();

  const goHome = event => {
    history.push('/');
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie, index) => (
        <NavLink key ={index} to={`/movies/${movie.id}`}><span className="saved-movie">{movie.title}</span></NavLink>
      ))}
        <div onClick={goHome} className="home-button">Home</div>
    </div>
  )
};

export default SavedList;
