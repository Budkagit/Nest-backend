import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './model/product.model';
import { ProductController } from './product.controller';

@Module({
  imports: [SequelizeModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule { }
