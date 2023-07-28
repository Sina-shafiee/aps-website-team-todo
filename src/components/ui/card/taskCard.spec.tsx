import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/utils/testUtils';

import { TaskCard } from './taskCard';
import { Todo } from '@/types';

const mockProps: Todo = {
  title: 'new Todo',
  description: 'some blah blah',
  is_completed: false,
  date: new Date(),
  id: 1,
};

describe('task card - rendering', () => {
  it('should render card title', () => {
    renderWithProviders(<TaskCard {...mockProps} />);
    expect(screen.getByText(new RegExp(mockProps['title']))).toBeInTheDocument();
  });
  it('should render card Description', () => {
    renderWithProviders(<TaskCard {...mockProps} />);
    expect(screen.getByText(new RegExp(mockProps['description']))).toBeInTheDocument();
  });
  it('should properly render todo creation time', () => {
    const date = mockProps['date'].toLocaleDateString('en-UK', {
      dateStyle: 'medium',
    });
    renderWithProviders(<TaskCard {...mockProps} />);
    expect(screen.getByText(new RegExp(date))).toBeInTheDocument();
  });
  it('should render a valid message if todo is completed', () => {
    renderWithProviders(<TaskCard {...mockProps} is_completed={true} />);
    expect(screen.getByText('completed')).toBeInTheDocument();
  });
  it('should render a valid message if todo is not completed', () => {
    renderWithProviders(<TaskCard {...mockProps} is_completed={false} />);
    expect(screen.getByText('not completed')).toBeInTheDocument();
  });
});
