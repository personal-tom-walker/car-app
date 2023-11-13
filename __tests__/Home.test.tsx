import { render, screen } from '@testing-library/react';
import { Hero } from '@/components';

it('Hero title should read Find, book, or rent a car - quickly and easily!', () => {
    render(<Hero />);
    const heroPageTitle = screen.getByText(
        'Find, book, or rent a car - quickly and easily!'
    );
    expect(heroPageTitle).toBeInTheDocument();
});
