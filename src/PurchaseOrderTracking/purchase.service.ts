import { Injectable } from '@nestjs/common';

@Injectable()
export class PurchaseService {

  placeOrder(): string {
    return 'Order Placed';
  }
  listPurchaseOrder(poId): string {
    return 'List Purchase Order';
  }
  updatePurchaseOrder(poId): string {
    return 'Update Purchase Order';
  }
  deletePurchaseOrder(poId): string {
    return 'Delete Purchase Order';
  }
  getPurchaseOrderById(): string {
    return 'Purchase Order BY ID';
  }
  
}
