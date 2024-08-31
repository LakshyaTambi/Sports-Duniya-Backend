// src/vendor/vendor.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vendor } from './vendor.entity';
import { CreateVendorDto } from './vendor.dto';

@Injectable()
export class VendorService {
  constructor(
    @InjectRepository(Vendor)
    private readonly vendorRepository: Repository<Vendor>,
  ) {}

  async createVendor(createVendorDto: CreateVendorDto): Promise<Vendor> {
    console.log("Creating vendor", createVendorDto)
    const newVendor = this.vendorRepository.create(createVendorDto);
    return this.vendorRepository.save(newVendor);
  }

  async listVendors(): Promise<Vendor[]> {
    return this.vendorRepository.find();
  }

  async getVendorById(vendorCode: string): Promise<Vendor> {
    return this.vendorRepository.findOneBy({ vendorCode });
  }

  async updateVendor(vendorCode: string, updateVendorDto: CreateVendorDto): Promise<Vendor> {
    await this.vendorRepository.update({ vendorCode }, updateVendorDto);
    return this.getVendorById(vendorCode);
  }

  async deleteVendor(vendorCode: string): Promise<void> {
    await this.vendorRepository.delete({ vendorCode });
  }
}
