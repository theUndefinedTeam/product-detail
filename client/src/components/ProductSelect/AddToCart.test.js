import React from 'react';
import AddToCart from './AddToCart';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('AddToCart component tests', () => {
  const style = {
    style_id: 1,
    name: 'Forest Green & Black',
    original_price: '140',
    sale_price: '0',
    'default?': 1,
    photos: [
      {
        thumbnail_url:
          'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url:
          'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      },
      {
        thumbnail_url:
          'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url:
          'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
      },
      {
        thumbnail_url:
          'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url:
          'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
      },
      {
        thumbnail_url:
          'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
        url:
          'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
      },
      {
        thumbnail_url:
          'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url:
          'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      },
      {
        thumbnail_url:
          'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url:
          'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
      },
    ],
    skus: {
      XS: 8,
      S: 16,
      M: 17,
      L: 10,
      XL: 15,
    },
  };
  const currentStyleIdx = 0;
  beforeEach(() =>
    render(
      <AddToCart
        style={style}
        currentStyleIdx={currentStyleIdx}
        productId='1'
      />
    )
  );
  afterEach(cleanup);

  test('Renders AddToCart component', () => {
    expect(screen.getByText('Add to Cart')).toBeInTheDocument();
    expect(screen.getByText('Select Size')).toBeInTheDocument();
  });
  test('Renders sizes to screen', () => {
    expect(screen.getByText('XS')).toBeInTheDocument();
  });
});

// describe('Answer Integration Testing', () => {
//   // Mount Answer to the DOM before each test and unmount it afterwards
//   const answer = {
//     body: 'Dash Rendar',
//     answerer_name: 'User5678',
//     date: '2011-01-01T00:00:00.000Z',
//     helpfulness: 85
//   };
//   beforeEach(() => render(<Answer answer={answer}/>));
//   afterEach(cleanup);

//   // Integration test between Answer and Helpful Components
//   test('Answer renders Helper component to screen', () => {
//     expect(screen.getByText('Helpful?')).toBeInTheDocument();
//     expect(screen.getByText('Yes')).toBeInTheDocument();
//     expect(screen.getByText('(85)')).toBeInTheDocument();
//   });
