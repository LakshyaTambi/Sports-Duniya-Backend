import { Controller, Delete, Get, Param, Post, Put, Body } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { CreatePurchaseOrderDto } from './create-purchase-order.dto';

@Controller('purchase-orders') // Corrected to plural form for consistency
export class PurchaseOrderController {
  constructor(private readonly purchaseOrderService: PurchaseService) {}

  @Post()
  async createPurchaseOrder(@Body() createPurchaseOrderDto: CreatePurchaseOrderDto) {
    return this.purchaseOrderService.createPurchaseOrder(createPurchaseOrderDto);
  }

  @Get()
  async listPurchaseOrders() {
    return this.purchaseOrderService.listPurchaseOrders();
  }
  
  @Get(':id')
  async getPurchaseOrderById(@Param('id') id: string) {
    return this.purchaseOrderService.getPurchaseOrderByPoNumber(id);
  }
  
  @Put(':id')
  async updatePurchaseOrder(@Param('id') id: string, @Body() updatePurchaseOrderDto: CreatePurchaseOrderDto) {
    return this.purchaseOrderService.updatePurchaseOrder(id, updatePurchaseOrderDto);
  }

  @Delete(':id')
  async deletePurchaseOrder(@Param('id') id: string) {
    return this.purchaseOrderService.deletePurchaseOrder(id);
  }
}
