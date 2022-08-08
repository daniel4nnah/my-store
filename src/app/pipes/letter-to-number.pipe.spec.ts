import { LetterToNumberPipe } from './letter-to-number.pipe';

describe('LetterToNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new LetterToNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
