import { arrayPagination } from "../../src/Helpers/arrayPagination";

describe('Pruebas a Helper arrayPagination', () => {

    const arr = [1,2,3,4,5,6,7,8,9];
    const arr50 = Array.from(Array(50).keys());

    test('La funcion debe entregar un arreglo vacio', () => {
        const noPages = arrayPagination([]);

        expect(noPages.length).toBe(1);
        expect(noPages[0].length).toBe(0);
    });

    test('La funcion debe entregar un arreglo de 2 arreglos', () => {
        const twoPages = arrayPagination(arr);
    
        expect(twoPages.length).toBe(2);
        expect(twoPages[1].length).toBeGreaterThan(0);
    });

    test('La funcion debe entregar mas de 2 paginas', () => {
        const manyPages = arrayPagination(arr50);
        
        expect(manyPages.length).toBeGreaterThan(2);
    });
});