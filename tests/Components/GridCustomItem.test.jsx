import { render, screen, fireEvent } from "@testing-library/react";
import { GridCustomItem } from "../../src/Components/GridCustomItem";

const localStorageMock = (function () {
    let store = {}

    return {
        setItem: jest.fn(() => null),
        getItem: jest.fn(() => null),
        removeItem: jest.fn(() => null)
    }
})()

Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
})

describe('Pruebas en el componente GridCustomItem', () => {

    const testItem = {
        author: "none",
        story_title: "untitled",
        story_url: "https://test.1234.com",
        created_at: "2022-07-06 08:08:08"
    }

    // test('Debe coincidir con el snapshot', () => {
    //     const {container} = render( <GridCustomItem {...testItem} />);
    //     expect(container).toMatchSnapshot();
    // });
    test('Debe mostrar las props entregadas en pantalla', () => {
        render(<GridCustomItem {...testItem} />);

        expect(screen.getByText(testItem.author, { exact: false })).toBeTruthy();
        expect(screen.getByText(testItem.story_title)).toBeTruthy();
    });
    test('Debe cambiar la opacidad (clase oRectangle de css) del componente al pasar el mouse por encima', () => {
        render(<GridCustomItem {...testItem} />);

        const paperConteiner = screen.getByLabelText('paper');
        fireEvent.mouseOver(paperConteiner);
        expect(paperConteiner.className).toContain('oRectangle');
    });

    test('Debe mostrar el icono de corazon completo al hacer click en el, esto contempla que el valor de inicio de fav es false ya que no hay datos en localstorage', () => {
        render(<GridCustomItem {...testItem} />);
        const favButton = screen.getByRole('button');
        fireEvent.click(favButton);
        expect(screen.getByLabelText('trueFav')).toBeTruthy();
    });

    test('Debe llamar a setItem de localStorage', () => {
        render(<GridCustomItem {...testItem} />);
        const spyLSadd = jest.spyOn(localStorage, 'setItem');
        const favButton = screen.getByRole('button');
        fireEvent.click(favButton);
        expect(spyLSadd).toHaveBeenCalled();
    });
});