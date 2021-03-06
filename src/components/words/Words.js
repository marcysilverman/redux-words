import React from 'react';
import PropTypes from 'prop-types';

function Words({ words }) {
  const listOfWords = words.map(word => {
    return <li key={word}>{word}</li>;
  });
  
  return (
    <>
      <ul>
        {listOfWords}
      </ul>
    </>
  );
}

Words.propTypes = {
  words: PropTypes.array,
};

export default Words;
