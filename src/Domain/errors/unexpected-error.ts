export class UnexpectedError extends Error {
  constructor() {
    super('Ops! Algo aconteceu de errado, Tente novamente em brave');
    this.name = 'UnexpectedError';
  }
};