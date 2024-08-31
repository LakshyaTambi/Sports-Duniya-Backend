import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PurchaseService } from './purchase.service';


@Controller('purchase-order')
export class PurchaseController {
  constructor(private readonly appService: PurchaseService) {}

  @Post()
   purchaseOrder():string{
     return this.appService.placeOrder();
   }

  @Get(':poId')
  listpurchaseOrder(@Param("poId")poId:Number): string {
    return this.appService.listPurchaseOrder(poId);
  }
  
  @Put(':poId')
  purchaseDetails(@Param("poId")poId:Number): string {
    return this.appService.updatePurchaseOrder(poId);
  }
 
  @Delete(':poId')
  deletePurchaseOrder(@Param("poId")poId:Number): string {
    return this.appService.deletePurchaseOrder(poId);
  }

}
