import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Gallery from './Gallery'

describe('Gallery', () => {
  it('shows message when no properties match search', () => {
    render(
      <Gallery
        searchTerm={{ location: 'Kadawatha' }}
        favourites={[]}
        setFavourites={() => {}}
      />
    )

    expect(
      screen.getByText(/no properties match/i)
    ).toBeInTheDocument()
  })
})
