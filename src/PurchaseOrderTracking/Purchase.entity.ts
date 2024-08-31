// src/purchase-order/purchase-order.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Vendor } from 'src/VendorProfileManagement/Vendor.entity';
@Entity()
export class PurchaseOrder {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  poNumber: string; // Unique number identifying the PO

  @Column()
  vendorCode: string; // Field to store vendorCode for linking to Vendor

  @ManyToOne(() => Vendor, (vendor) => vendor.purchaseOrders)
  @JoinColumn({ name: 'vendorCode', referencedColumnName: 'vendorCode' })
  vendor: Vendor; // Reference to the Vendor model

  @Column({ type: 'date' })
  orderDate: Date; // Date when the order was placed

  @Column({ type: 'date', nullable: true })
  deliveryDate: Date; // Expected or actual delivery date of the order

  @Column({ type: 'json' })
  items: object; // Details of items ordered (e.g., an array of item objects)

  @Column()
  quantity: number; // Total quantity of items in the PO

  @Column()
  status: string; // Current status of the PO (e.g., pending, completed, canceled)

  @Column({ type: 'float', nullable: true })
  qualityRating: number; // Rating given to the vendor for this PO (nullable)

  @Column({ type: 'date' })
  issueDate: Date; // Timestamp when the PO was issued to the vendor

  @Column({ type: 'date', nullable: true })
  acknowledgmentDate: Date; // Timestamp when the vendor acknowledged the PO (nullable)
}
