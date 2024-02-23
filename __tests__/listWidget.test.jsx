import { render, screen } from '@testing-library/react';
import React from 'react';
import ListWidget from '../components/shared/widget/ListWidget';

describe('ListWidget', () => {
  const mockResults = [
    { name: 'Item 1', url: 'https://example.com/1' },
    { name: 'Item 2', url: 'https://example.com/2' },
    { name: 'Item 3', url: 'https://example.com/3' },
  ];

  it('Renders list widget with correct data', () => {
    const title = 'List Widget';
    const subtitle = 'Subtitle';

    render(
      <ListWidget title={title} subtitle={subtitle} results={mockResults} />,
    );

    expect(screen.getByText(title)).toBeTruthy();
    expect(screen.getByText(subtitle)).toBeTruthy();

    mockResults.forEach(item => {
      expect(screen.getByText(item.name)).toBeTruthy();
    });
  });
});
