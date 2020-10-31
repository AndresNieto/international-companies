import { Request, Response } from "express";
import { ProductService } from '../services/product.service';
import { ProductModel, ProductListModel } from "../models/productModel";
import { FilterCategory } from "../enums/FilterCategory";

/**
 * Controller for manage contact info
 */
export class ProductController {

    static getProducts = async (req: Request, res: Response) => {
        const { category } = req.params;
        const _productService = new ProductService();

        try {
            const productsList: Array<ProductModel> = await _productService.getProducts();
            let totalProducts = productsList.length;
            let responseAPI: ProductListModel = new ProductListModel(productsList, totalProducts);
            if (category != FilterCategory.ALL) {
                let products = productsList.filter(product => (
                    product.categories.includes(category)
                ))
                responseAPI.productlist = products;
                res.send(responseAPI);
            }
            res.send(responseAPI);
        } catch (error) {
            res.status(400).send({ message: 'Service not available' })
        }
    };
}

export default ProductController;