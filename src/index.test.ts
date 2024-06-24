import { describe, expect, it } from 'vitest';
import { sum } from '.';

describe('对sum求和函数进行测试', () => {
    it('should return 3 with 1+2', () => {
        expect(sum(1, 2)).toBe(3);
    });
    it('should return 0 with 0+0', () => {
        expect(sum(0, 0)).toBe(0);
    });
    it('should return null with 2+null', () => {
        expect(sum(2, null as any)).toBe(null);
    });
});
