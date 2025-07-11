import { describe, it, expect } from '@jest/globals';
import { cn, formatDate, slugify } from '@/lib/utils';

describe('Utils', () => {
  describe('cn', () => {
    it('should merge class names correctly', () => {
      expect(cn('px-4', 'py-2')).toBe('px-4 py-2');
    });
  });

  describe('formatDate', () => {
    it('should format date correctly', () => {
      const date = new Date('2024-01-15');
      expect(formatDate(date)).toBe('January 15, 2024');
    });
  });

  describe('slugify', () => {
    it('should convert text to slug', () => {
      expect(slugify('Hello World!')).toBe('hello-world');
      expect(slugify('Test & Example')).toBe('test-example');
    });
  });
});