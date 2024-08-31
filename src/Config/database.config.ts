import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PurchaseOrder } from 'src/PurchaseOrderTracking/Purchase.entity';
import { Vendor } from 'src/VendorProfileManagement/Vendor.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql', // Use MySQL as the database type
  host: process.env.DATABASE_HOST || 'localhost', // Database host
  port: +process.env.DATABASE_PORT || 3306, // Database port (default for MySQL is 3306)
  username: process.env.DATABASE_USERNAME || 'root', // Database username (default is 'root')
  password: process.env.DATABASE_PASSWORD || 'root', // Database password
  database: process.env.DATABASE_NAME || 'sportsduniya', // Database name
  entities: [Vendor,PurchaseOrder], // Path to entities
  synchronize: true, // Automatically create/update the schema
};
