import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Column from '../components/shared/Column';

describe('Column', () => {
  it('Renders a column with correct heading', () => {
    const heading = 'Test Heading';
    const size = 1;
    render(<Column heading={heading} size={size} />);

    const headingElement = screen.getByText(heading);
    expect(headingElement).toBeInTheDocument();

    const columnElement = screen.getByTestId('column');
    expect(columnElement).toBeInTheDocument();
  });

  it('Renders a column with specified size', () => {
    const heading = 'Test Heading';
    const size = 3;
    render(<Column heading={heading} size={size} />);

    const columnElement = screen.getByTestId('column');
    expect(columnElement).toHaveClass('w-[700px]');

    expect(columnElement).toHaveClass('min-w-[300px]');
  });

  it('Renders a column with children', () => {
    const heading = 'Test Heading';
    const size = 2;
    const childrenText = 'Test Child';
    render(
      <Column heading={heading} size={size}>
        <div>{childrenText}</div>
      </Column>,
    );

    const childElement = screen.getByText(childrenText);
    expect(childElement).toBeInTheDocument();
  });
});
