import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './index';

describe('Login Component', () => {
  it('Should not render spinner and error on start', () => {
    render(<Login />);
    const formStatus = screen.getByRole('formStatus');
    expect(formStatus.childElementCount).toBe(0);
  })
})