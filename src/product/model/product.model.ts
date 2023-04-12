import { UUIDV4 } from 'sequelize';
import { Table, Column, Model } from 'sequelize-typescript';
@Table
export class Product extends Model {
    @Column({
        primaryKey: true,
        defaultValue: UUIDV4(),
    })
    id: string;
    @Column
    name: string;
    @Column
    price: string;
    @Column
    vendor_name: string;
    @Column
    vendorID: string;
    @Column
    longitude: string;
    @Column
    latitude: string;
    @Column
    rating: string;
    @Column
    image: string;
    @Column
    location: string;
} 