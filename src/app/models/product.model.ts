
export interface Category {
    id: string,
    name: string
}

export interface Product {
    id: string,
    images: string[],
    title: string,
    price: number,
    description: string,
    category: Category
}

export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {        //Al usar Omit, se omiten los valores que están entre comillas
    categoryId: number;                                                             //'id', y 'category'
}

export interface UpdateProductDTO extends Partial<CreateProductDTO> {}    //Al usar Partial, se está diciendo que los valores son opcionales

