 /* eslint "require-jsdoc": 0 */
 
//  import { convertToF } from './convert';


xdescribe('convert', () => {
    test('should return number', () => {
        expect(typeof convertToF(0)).toBe('number');
    });

    test('should return: -22', () => {
        expect(convertToF(-30)).toBe(-22);
    });

    test('should return: 14', () => {
        expect(convertToF(-10)).toBe(14);
    });
});