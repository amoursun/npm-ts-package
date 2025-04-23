import { isDef } from '../index';
import { describe, expect, it, vi } from 'vitest';

describe('isDef', () => {
  it('should return true for defined values', () => {
    expect(isDef(1)).to.be.true;
    expect(isDef('test')).to.be.true;
    expect(isDef({})).to.be.true;
    expect(isDef([])).to.be.true;
    expect(isDef(true)).to.be.true;
    expect(isDef(false)).to.be.true;
  });

  it('should return false for undefined values', () => {
    expect(isDef(undefined)).to.be.false;
  });

  it('should return false for null values', () => {
    expect(isDef(null)).to.be.false;
  });


  it('should return true for defined values', () => {
    expect(isDef(1)).toBe(true);
    expect(isDef('test')).toBe(true);
    expect(isDef({})).toBe(true);
    expect(isDef([])).toBe(true);
  });

  it('should return false for undefined values', () => {
      expect(isDef(undefined)).toBe(false);
  });

  it('should return false for null values', () => {
      expect(isDef(null)).toBe(false);
  });
  // it('should return etag when etag exists', async () => {
  //   const mockUrl = 'http://example.com';
  //   const mockResponse = {
  //       headers: {
  //           get: () => 'etag-value'
  //       }
  //   };
  //   global.fetch = vi.fn().mockResolvedValue(mockResponse);

  //   const result = await fetch(mockUrl);

  //   expect(result.status).toBe('ok');
  //   expect(result.data).toBe('xxx');
  //   expect(result.error).toBeUndefined();
  // });
});