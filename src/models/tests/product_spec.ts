import {Product, ProductList} from '../product';

const store = new ProductList()

describe('Product Model', function () {
    it('should have an index method', function () {
        expect(store.index).toBeDefined()
    });
    it('index method should return a list of products', async ()=> {
        const result = await store.index();
        expect(result).toEqual([{
            id: "1",
            name_product: "Beats Solo3 Wireless Headphones",
            price: 250,
            category: "HEADPHONES"
        }]);
    });

    it('show method should return the correct product', async () => {
        const result = await store.show("1");
        expect(result).toEqual({
            id: "1",
            name_product: "Beats Solo3 Wireless Headphones",
            price: 250,
            category: "HEADPHONES"
        });
    });

    it('delete method should remove the book', async () => {
        store.delete("1");
        const result = await store.index()
        expect(result).toEqual([]);
    });
});

