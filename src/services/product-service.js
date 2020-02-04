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

}