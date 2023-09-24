import { Clock } from './Clock';

describe('Clock', () => {
    // Scenario 1: Print the current time
    describe('toString()', () => {
      test('should display 08:00 when initialized with 8 hours', () => {
        const clock = new Clock(8);
        expect(clock.toString()).toBe('08:00');
      });
  
      test('should display 11:09 when initialized with 11 hours and 9 minutes', () => {
        const clock = new Clock(11, 9);
        expect(clock.toString()).toBe('11:09');
      });
  
      test('should display 00:00 when initialized with 24 hours and 0 minutes', () => {
        const clock = new Clock(24, 0);
        expect(clock.toString()).toBe('00:00');
      });
  
      // ... more test cases for negative hours and minutes, if needed.
    });
  
    // Scenario 2: Add and subtract minutes
    describe('plus() and minus()', () => {
      test('should display 10:03 when adding 3 minutes to 10:00', () => {
        const clock = new Clock(10, 0);
        const newClock = clock.plus(3);
        expect(newClock.toString()).toBe('10:03');
      });
  
      test('should display 10:00 when subtracting 3 minutes from 10:03', () => {
        const clock = new Clock(10, 3);
        const newClock = clock.minus(3);
        expect(newClock.toString()).toBe('10:00');
      });
  
      // ... more test cases for other cases, if needed.
    });
  
    // Scenario 3: Are the clocks equal?
    describe('equals()', () => {
      test('should return true when comparing two clocks with time 15:37', () => {
        const clock1 = new Clock(15, 37);
        const clock2 = new Clock(15, 37);
        expect(clock1.equals(clock2)).toBe(true);
      });
  
      test('should return false when comparing clocks with time 15:36 and 15:37', () => {
        const clock1 = new Clock(15, 36);
        const clock2 = new Clock(15, 37);
        expect(clock1.equals(clock2)).toBe(false);
      });
  
      // ... more test cases for other cases, if needed.
    });
  });
  