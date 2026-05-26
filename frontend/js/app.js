import { fetchItems } from './api.js';

const list = document.getElementById('items-list');
const status = document.getElementById('status');

async function loadItems() {
    try {
        status.textContent = "Cargando...";
        status.className = "loading";

        const items = await fetchItems();

        status.textContent = "";
        renderItems(items);

    } catch (error) {
        status.textContent = "Error al cargar datos";
        status.className = "error";
        console.error(error);
    }
}

function renderItems(items) {
    list.innerHTML = "";

    items.forEach(item => {
        const li = document.createElement('li');
        li.className = "item";

        li.innerHTML = `
            <strong>${item.nombre}</strong><br>
Cantidad: ${item.cantidad}<br>
Stock: ${item.stock}
        `;

        list.appendChild(li);
    });
}

// Inicializar
loadItems();