import React from 'react';

function main() {
  const fn = x => x * 10;
  return <div onClick={fn}>Hello there!</div>;
}

module.exports = main;
