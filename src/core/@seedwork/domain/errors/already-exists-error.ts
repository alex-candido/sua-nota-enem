export class AlreadyExistsError extends Error {
  constructor(message?: string) {
    super(message || 'data already exists');
    this.name = 'InvalidUuidError';
  }
}

export default AlreadyExistsError;
