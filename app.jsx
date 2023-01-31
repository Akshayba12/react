import React from 'react';
import PropTypes from 'prop-types';

const bgColor = 'red';
const color = 'white';

function App({ tittle, desc }) {
  return (
    <>
      <h1
        style={{
          backgroundColor: bgColor,
          color,
        }}
      >
        {tittle}

      </h1>
      <h2>{desc}</h2>
    </>

  );
}

App.propTypes = {
  tittle: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

//  App.defaultProps={
//   desc:'N/A'
//  }

export default App;
