import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';
import ReactDOM from 'react-dom';

beforeEach(() => {

  const existingBackdrop = document.getElementById('backdrop-root');
  if (existingBackdrop) existingBackdrop.remove();

  const existingOverlay = document.getElementById('overlay-root');
  if (existingOverlay) existingOverlay.remove();


  const backdropRoot = document.createElement('div');
  backdropRoot.setAttribute('id', 'backdrop-root');
  document.body.appendChild(backdropRoot);

  const overlayRoot = document.createElement('div');
  overlayRoot.setAttribute('id', 'overlay-root'); 
  document.body.appendChild(overlayRoot);
});

it('renders existing expenses', () => {
  render(<App />);
  expect(screen.getByText('New hangers')).toBeInTheDocument();
});

it('adds a new expense and shows it in the list', async () => {
  render(<App />);
  await userEvent.click(screen.getByText(/add new expense/i));

  const titleInput = await screen.findByLabelText(/title/i);
  const priceInput = await screen.findByLabelText(/price/i);
  const dateInput = await screen.findByLabelText(/date/i);

  await userEvent.type(titleInput, 'Coffee');
  await userEvent.type(priceInput, '3.5');
  await userEvent.type(dateInput, '2025-06-11');

  await userEvent.click(screen.getByText(/add expense/i));

  expect(await screen.findByText('Coffee')).toBeInTheDocument();
});

it('shows an error message if fields are incomplete', async () => {
  render(<App />);
  await userEvent.click(screen.getByText(/add new expense/i));

  const titleInput = await screen.findByLabelText(/title/i);
  await userEvent.type(titleInput, 'Only title');
  
  await userEvent.click(screen.getByText(/add expense/i));

  expect(await screen.findByText(/Please enter a valid title/i)).toBeInTheDocument();
});

it('filters expenses by year 2024', async () => {
  render(<App />);
  const dropdown = screen.getByLabelText(/filter by year/i);
  await userEvent.selectOptions(dropdown, '2024');

  expect(screen.getByText('New book')).toBeInTheDocument();
  expect(screen.getByText('New bag')).toBeInTheDocument();
  expect(screen.queryByText('New hangers')).not.toBeInTheDocument();
});

it('shows message when no expenses found for selected year', async () => {
  render(<App />);
  const dropdown = screen.getByLabelText(/filter by year/i);
  await userEvent.selectOptions(dropdown, '2026');

  expect(screen.getByText(/no expenses found/i)).toBeInTheDocument();
});

it('closes the form when cancel is clicked', async () => {
  render(<App />);
  await userEvent.click(screen.getByText(/add new expense/i));

  const cancelButton = await screen.findByText(/cancel/i);
  await userEvent.click(cancelButton);

  expect(screen.queryByText(/add expense/i)).not.toBeInTheDocument();
});
