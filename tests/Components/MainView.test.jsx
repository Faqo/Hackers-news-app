import { render, screen } from "@testing-library/react";
import { MainView } from "../../src/Components/MainView";
import { useFetch } from "../../src/Hooks/useFetch";

jest.mock('../../src/Hooks/useFetch');

describe('Pruebas en el componente de MainView', () => {
    test('Debe de mostrar el componente de loading con la carga en espera', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
        });
        render(<MainView />);
        // screen.debug()
        expect(screen.getByText('Cargando ...'));
    });
    test('Debe mostrar un objeto con los datos', () => {
        useFetch.mockReturnValue({
            data: {history:[{
                author: "none",
                story_title: "untitled",
                story_url: "https://test.1234.com",
                created_at: "2022-07-06 08:08:08"
            },{
                author: "none",
                story_title: "untitled",
                story_url: "https://test.1234.com",
                created_at: "2022-07-06 08:08:09"
            }],nbPages:1 },
            isLoading: false,
        });
        render(<MainView />);
        screen.debug()
        expect(screen.getByLabelText("Grid")).toBeTruthy();
    });
});