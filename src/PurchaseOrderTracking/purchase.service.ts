// src/purchase-order/purchase.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PurchaseOrder } from './Purchase.entity';
import { CreatePurchaseOrderDto } from './create-purchase-order.dto';


@Injectable()
export class PurchaseService {
  getPurchaseOrderById(id: string) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(PurchaseOrder)
    private readonly purchaseOrderRepository: Repository<PurchaseOrder>,
  ) {}

  async createPurchaseOrder(createPurchaseOrderDto: CreatePurchaseOrderDto): Promise<PurchaseOrder> {
    console.log("Creating purchase order", createPurchaseOrderDto);
    const newPurchaseOrder = this.purchaseOrderRepository.create(createPurchaseOrderDto);
    return this.purchaseOrderRepository.save(newPurchaseOrder);
  }

  async listPurchaseOrders(): Promise<PurchaseOrder[]> {
    return this.purchaseOrderRepository.find();
  }

  async getPurchaseOrderByPoNumber(poNumber: string): Promise<PurchaseOrder> {
    return this.purchaseOrderRepository.findOneBy({ poNumber });
  }

  async updatePurchaseOrder(poNumber: string, updatePurchaseOrderDto: CreatePurchaseOrderDto): Promise<PurchaseOrder> {
    await this.purchaseOrderRepository.update({ poNumber }, updatePurchaseOrderDto);
    return this.getPurchaseOrderByPoNumber(poNumber);
  }

  async deletePurchaseOrder(poNumber: string): Promise<void> {
    await this.purchaseOrderRepository.delete({ poNumber });
  }
}
