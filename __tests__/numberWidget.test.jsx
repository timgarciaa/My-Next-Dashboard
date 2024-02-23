import { render, screen } from '@testing-library/react';
import React from 'react';
import NumberWidget from '../components/shared/widget/NumberWidget';
import '@testing-library/jest-dom';

describe('NumberWidget', () => {
  it('Renders number widget with correct title and count', () => {
    const title = 'Number Widget';
    const count = 10;

    render(<NumberWidget title={title} count={count} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(count.toString())).toBeInTheDocument();
  });
});
