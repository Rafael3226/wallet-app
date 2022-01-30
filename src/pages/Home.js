import React from 'react';

const colorStyle = { color: '#f6dd69' };

function Home() {
  return (
    <div className="home__background">
      <div className="container" style={{ marginTop: '30px' }}>
        <h1>Our Smart Kitchen</h1>
        <h1>Platform is</h1>
        <h1 style={colorStyle}>go to the restaurant</h1>
        <h1 style={colorStyle}>or all restaurants</h1>
        <h1>in the future</h1>
      </div>
    </div>
  );
}

export default Home;
