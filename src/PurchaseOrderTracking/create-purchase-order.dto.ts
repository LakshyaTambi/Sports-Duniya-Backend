
export class CreatePurchaseOrderDto {
    poNumber: string; 
  
    vendorCode: string; 
  
    orderDate: Date; 
  
    deliveryDate?: Date; 
  
    items: object; 
  
    quantity: number; 
  
    status: string; 
  
    qualityRating?: number; 
  
    issueDate: Date; 
  
    acknowledgmentDate?: Date; 
  }
  