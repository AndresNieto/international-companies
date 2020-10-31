import { ProductModel } from "models/productModel";

var Request = require("request");
var path = require('path');

/**
 * Service for products
 */
export class ProductService {

    /**
     * Get all productos from products.json
     * @param query 
     */
    async getProducts(): Promise<any> {
        return new Promise((resolve, reject) => {

            var fs = require('fs');
            fs.readFile(path.join(__dirname, "../data", 'products.json'), 'utf8', function (err, productsJSON) {
                if (err) throw err;
                productsJSON = JSON.parse(productsJSON);
                resolve(productsJSON)
            });
        })
    }
}