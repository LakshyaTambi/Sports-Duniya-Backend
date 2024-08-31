// src/vendor/vendor.entity.ts
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { PurchaseOrder } from 'src/PurchaseOrderTracking/Purchase.entity';

@Entity()
export class Vendor {
  @PrimaryColumn() // Use PrimaryColumn instead of PrimaryGeneratedColumn for vendorCode
  vendorCode: string; // Unique identifier for the vendor

  @Column()
  name: string;

  @Column()
  contactDetails: string;

  @Column()
  address: string;

  @Column({ type: 'float', nullable: true })
  onTimeDeliveryRate: number;

  @Column({ type: 'float', nullable: true })
  qualityRatingAvg: number;

  @Column({ type: 'float', nullable: true })
  averageResponseTime: number;

  @Column({ type: 'float', nullable: true })
  fulfillmentRate: number;

  @OneToMany(() => PurchaseOrder, (po) => po.vendor)
  purchaseOrders: PurchaseOrder[];
}
