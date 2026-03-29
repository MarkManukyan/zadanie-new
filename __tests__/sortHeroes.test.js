import { sortHeroesByHealth } from '../src/sortHeroes.js';

describe('sortHeroesByHealth', () => {
    test('should sort heroes by health in descending order', () => {
        const input = [
            { name: 'мечник', health: 10 },
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 }
        ];

        const expected = [
            { name: 'маг', health: 100 },
            { name: 'лучник', health: 80 },
            { name: 'мечник', health: 10 }
        ];

        expect(sortHeroesByHealth(input)).toEqual(expected);
    });

    test('should handle array with one hero', () => {
        const input = [{ name: 'маг', health: 100 }];
        const expected = [{ name: 'маг', health: 100 }];

        expect(sortHeroesByHealth(input)).toEqual(expected);
    });

    test('should handle empty array', () => {
        const input = [];
        const expected = [];

        expect(sortHeroesByHealth(input)).toEqual(expected);
    });

    test('should not modify original array', () => {
        const original = [
            { name: 'мечник', health: 10 },
            { name: 'маг', health: 100 }
        ];
        const copy = [...original];

        sortHeroesByHealth(original);

        expect(original).toEqual(copy);
    });
});
