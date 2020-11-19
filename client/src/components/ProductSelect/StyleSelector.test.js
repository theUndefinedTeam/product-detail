import React from 'react';
import StyleSelector from './StyleSelector';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import photos from '../../urlData/urls';

describe('StyleSelector component tests', () => {
  test('renders Style Selector Component', () =>
    render(<StyleSelector currentStyleIdx={0} images={photos} />));
});
