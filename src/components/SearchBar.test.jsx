import {render, screen} from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {userEvent} from '@testing-library/user-event';
import SearchBar from './SearchBar.jsx';

describe('SearchBar Component', () => {
    it('renders search bar heading', () => {
        render(<SearchBar
            searchTerm = {{
                location: "",
                type: "",
                bedrooms:"",
                minPrice: "",
                maxPrice: "",
                year: ""
            }}
            setSearchTerm = {() => {}
            } 
        />);

        expect(screen.getByText(/find your perfect property/i)).toBeInTheDocument();
    });

    it('updates location when typing', async () => {
        const user = userEvent.setup();
        const setSearchTerm = vi.fn();

        render(<SearchBar
            searchTerm = {{
                location: "",
                type: "",
                bedrooms:"",
                minPrice: "",
                maxPrice: "",
                year: ""
            }}
            setSearchTerm = {setSearchTerm} 
        />);

        const input = screen.getByPlaceholderText(/orpington/i);
        await user.type(input, 'BR5');

        expect(setSearchTerm).toHaveBeenCalled();
    })
})