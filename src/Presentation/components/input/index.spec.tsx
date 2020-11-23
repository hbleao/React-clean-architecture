import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';

import Input from './index';

const makeSut = (): RenderResult => {
  return render(<Input role='test-input' />);
};

describe('Input Component', () => {
  it('Should begin with readOnly', () => {
    const sut = makeSut();
    const input = sut.getByRole('test-input') as HTMLInputElement;
    expect(input.readOnly).toBe(true);
  });

  it('Should begin with readOnly on Focus', () => {
    const sut = makeSut();
    const input = sut.getByRole('test-input') as HTMLInputElement;
    fireEvent.focus(input);
    expect(input.readOnly).toBe(false);
  });
});