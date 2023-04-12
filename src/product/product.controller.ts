import { Controller, Get, Post, Body, UseGuards, Param } from '@nestjs/common'

import { ProductService } from './product.service';

@Controller('auth')

export class ProductController {
    constructor(private readonly productservice: ProductService
    ) { }

    @Post('product')
    async getProduct() {
        return this.productservice.getProduct()
    }

    @Post('addProduct')
    async addProduct(
        @Body()
        body: {
            name:string
            price:string
            vendor_name:string
            vendorID:string
            longitude:string
            latitude:string
            rating:string
            image:string
            location:string
        },

    ) {
        return this.productservice.addProduct(body);
    };
}
