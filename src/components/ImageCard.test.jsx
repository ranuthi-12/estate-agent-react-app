import {render, screen} from '@testing-library/react';
import ImageCard from './ImageCard.jsx';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

const mockProperty = {
  id: 'prop1',
  type: 'House',
  bedrooms: 3,
  price: 750000,
  tenure: 'Freehold',
  description: 'Beautiful family home',
  location: 'Orpington',
  picture: 'images/test.jpg',
  added: {
    month: 'October',
    day: 12,
    year: 2022
  }
}

describe('ImageCard', () => {
  test('renders property information', () => {
    render(
      <BrowserRouter>
        <ImageCard property={mockProperty} addToFavourites={() => {}} />
      </BrowserRouter>
    )

    expect(screen.getByText(/house/i)).toBeInTheDocument()
    expect(screen.getByText(/£750,000/i)).toBeInTheDocument()
    expect(screen.getByText(/orpington/i)).toBeInTheDocument()
    expect(screen.getByText(/freehold/i)).toBeInTheDocument()
  })
})
