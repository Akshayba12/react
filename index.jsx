/* eslint-disable react/button-has-type */
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { createRoot } from 'react-dom/client';
// eslint-disable-next-line import/extensions
import App from './app';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <>
    <App tittle="virat kohli" desc="cricketer" />
    ,
    <App tittle="Rohit sharma" desc="" />
  </>,

);
