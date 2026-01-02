import { render, screen, fireEvent } from '@testing-library/react'
import ImageCard from './ImageCard'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'

const mockProperty = {
  id: 'prop1',
  type: 'House',
  bedrooms: 3,
  price: 750000,
  tenure: 'Freehold',
  description: 'Test description',
  location: 'Orpington',
  picture: 'images/test.jpg',
  added: { month: 'October', day: 12, year: 2022 }
}

describe('Favourites', () => {
  it('calls addToFavourites when button clicked', () => {
    const addToFavourites = vi.fn()

    render(
      <BrowserRouter>
        <ImageCard
          property={mockProperty}
          addToFavourites={addToFavourites}
        />
      </BrowserRouter>
    )

    fireEvent.click(
      screen.getByText(/add to favourites/i)
    )

    expect(addToFavourites).toHaveBeenCalledOnce()
  })
})