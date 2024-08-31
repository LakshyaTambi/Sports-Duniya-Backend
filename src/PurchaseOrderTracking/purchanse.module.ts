import { Module } from '@nestjs/common';
import { PurchaseOrderController } from './purchase.controller';
import { PurchaseService } from './purchase.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseOrder } from './Purchase.entity';
import { Vendor } from 'src/VendorProfileManagement/Vendor.entity';
@Module({
    imports: [TypeOrmModule.forFeature([PurchaseOrder, Vendor])],
  controllers: [PurchaseOrderController],
  providers: [PurchaseService],
})
export class PurchaseModule {}
