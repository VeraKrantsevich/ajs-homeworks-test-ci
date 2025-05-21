import getHealthStatus from '../health';

describe('getHealthStatus', () => {
  test('returns "healthy" when health is more than 50', () => {
    expect(getHealthStatus({ health: 90 })).toBe('healthy');
  });

  test('returns "wounded" when health is between 15 and 50', () => {
    expect(getHealthStatus({ health: 50 })).toBe('wounded');
    expect(getHealthStatus({ health: 15 })).toBe('wounded');
  });

  test('returns "critical" when health is less than 15', () => {
    expect(getHealthStatus({ health: 10 })).toBe('critical');
  });
});