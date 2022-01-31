import React from 'react';

const colorStyle = { color: '#666' };

function Home() {
  return (
    <div className="home__background">
      <div className="container" style={{ marginTop: '30px' }}>
        <h1 style={colorStyle}>Our Smart Kitchen</h1>
        <h1 style={colorStyle}>Platform is</h1>
        <h1 style={colorStyle}>go to the restaurant</h1>
        <h1 style={colorStyle}>or all restaurants</h1>
        <h1 style={colorStyle}>in the future</h1>
      </div>
    </div>
  );
}

export default Home;
