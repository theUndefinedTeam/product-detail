/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import StyleSelector from './StyleSelector';
import '@testing-library/jest-dom';
import photos from '../../urlData/urls';

describe('StyleSelector component tests', () => {
  test('renders Style Selector Component', () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    render(<StyleSelector currentStyleIdx={0} images={photos} />));
});
