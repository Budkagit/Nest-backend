import { sign, verify } from "jsonwebtoken";
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product} from "./model/product.model";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Sequelize } from "sequelize-typescript";


@Injectable()


export class ProductService {

    constructor(
        @InjectModel(Product)
        private productModel: typeof Product,
        private sequelize:Sequelize,){
            this.sequelize.sync({force:false});
        }
    


    async getProduct(){
        return this.productModel.findAll    ()
        // ({ where: { name: id} });
    }
    async addProduct(body) {
        const product = await this.productModel.create({
            name:body.name,
            price:body.price,
            vendor_name:body.vendor_name,
            vendorID:body.vendorID,
            longitude:body.longitude,
            latitude:body.latitude,
            rating:body.rating,
            image:body.image,
            location:body.location,
        })
    }
}








