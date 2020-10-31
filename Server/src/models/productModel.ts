export class ProductListModel{
    constructor(
        public productlist: Array<ProductModel>,
        public totalProducts: number
    ){}
}

export class ProductModel{
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public price: string,
        public brand: string,
        public stock: number,
        public photo: string,
        public categories: Array<string>
    ){}
}