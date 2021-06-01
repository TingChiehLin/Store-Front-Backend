import {Product, ProductList} from '../product';

const store = new ProductList()

describe('Product Model', function () {
    it('should have an index method', function () {
        expect(store.index).toBeDefined()
    });
    it('index method should return a list of products', async ()=> {
        const result = await store.index();
        expect(result).toEqual([]);
    });
});

