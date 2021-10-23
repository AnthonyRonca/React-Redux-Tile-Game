import React from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleIDs, flipCard, selectMatchedIDs } from '../../boardSlice.js';
import { useDispatch } from 'react-redux';

let cardLogo = "https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png";

export const Card = ({ id, contents }) => {
  const visibleIDs = useSelector(selectVisibleIDs);
  const matchedIDs = useSelector(selectMatchedIDs);

  const dispatch = useDispatch();

  const flipHandler = (id) => {
    dispatch(flipCard(id));
  };

  let cardStyle = 'resting'
  let click = () => flipHandler(id);
  
  let cardText = (
    <img src={cardLogo} className="logo-placeholder" alt="Card option" style={{height: 40, width: 40,}}/>
  );

  if (visibleIDs.includes(id) || matchedIDs.includes(id)) {
    cardText = contents;
    click = () => {};
  }

  if (matchedIDs.includes(id)) {
    cardStyle = 'matched';
  }

  if (visibleIDs.length >= 2) {
    click = () => {};
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};