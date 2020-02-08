export default class ProductService {

    getProducts = async () => {
        const res = await fetch(`http://127.0.0.1:8000/api/products`);

        if (!res.ok) {
            throw new Error(`Could not fetch` +
                `, received ${res.status}`)
        }
        return await res.json();
    };
    getCategories = async () => {
        const res = await fetch(`http://127.0.0.1:8000/api/categories`);

        if (!res.ok) {
            throw new Error(`Could not fetch` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    selectCategories = async (id) => {
        const res = await fetch(`http://127.0.0.1:8000/api/category/${id}`);

        if (!res.ok) {
            throw new Error(`Could not fetch` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    createCategory = async (name) => {
        const response = await fetch('http://127.0.0.1:8000/api/categories', {
            method: 'POST', // или 'PUT'
            body: JSON.stringify({'name':name}), // данные могут быть 'строкой' или {объектом}!
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        console.log('Успех:', JSON.stringify(json));
    };

    createProduct = async (obj) => {
        const response = await fetch('http://127.0.0.1:8000/api/products', {
            method: 'POST', // или 'PUT'
            body: JSON.stringify(obj), // данные могут быть 'строкой' или {объектом}!
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
    }

    deleteCategory = async (id) => {
        await fetch(`http://127.0.0.1:8000/api/category/${id}`, {
            method: 'DELETE', // или 'PUT'
        });
    }

}