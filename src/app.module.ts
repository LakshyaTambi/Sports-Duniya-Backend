import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VendorModule } from './VendorProfileManagement/vendor.module'; // Correct path and naming
import { databaseConfig } from './config/database.config'; // Ensure you have this configuration file
import { PurchaseModule } from './PurchaseOrderTracking/purchanse.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig), // Import TypeOrmModule and provide database configuration
     VendorModule,
     PurchaseModule
  ],
  controllers: [AppController],
  providers: [AppService], 
}) 
export class AppModule {}
