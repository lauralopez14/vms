const BASE_URL = "http://192.168.56.12:8080/utiles";

export async function fetchItems() {
    try {
        const response = await fetch(BASE_URL);

        if (!response.ok) {
            throw new Error("Error en la respuesta del servidor");
        }

        return await response.json();

    } catch (error) {
        throw error;
    }
}