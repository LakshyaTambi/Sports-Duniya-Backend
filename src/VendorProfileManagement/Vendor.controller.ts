import { Controller, Delete, Get, Param, Post, Put, Body } from '@nestjs/common';
import { VendorService } from './Vender.service';
import { CreateVendorDto } from './vendor.dto';
import { Vendor } from './vendor.entity'; // Assuming you have this entity defined

@Controller('vendors')
export class VendorController {
  constructor(private readonly vendorService: VendorService) {}

  @Post()
  async createVendor(@Body() createVendorDto: CreateVendorDto): Promise<Vendor> {
    return this.vendorService.createVendor(createVendorDto);
  }

  @Get()
  async listVendors(): Promise<Vendor[]> {
    return this.vendorService.listVendors();
  }

  @Get(':vendorCode') // Assuming vendorCode is a string (adjust if it's a different type)console.log("")
  async getVendorById(@Param('vendorCode') vendorCode: string): Promise<Vendor> {
    console.log("Vendor Code",vendorCode)
    return this.vendorService.getVendorById(vendorCode);
  }

  @Put(':vendorCode')
  async updateVendor(
    @Param('vendorCode') vendorCode: string,
    @Body() updateVendorDto: CreateVendorDto // Assuming updateVendorDto has the same structure
  ): Promise<Vendor> {
    return this.vendorService.updateVendor(vendorCode, updateVendorDto);
  }

  @Delete(':vendorCode')
  async deleteVendor(@Param('vendorCode') vendorCode: string): Promise<void> {
    return this.vendorService.deleteVendor(vendorCode);
  }
}
