import { Vendor } from "../vendors/Vendor";

export class Product {
  id: number | undefined;
  partNbr = "";
  name = "";
  price = "";
  // city = "";
  unit = "";
  vendorId = "";
  vendor: Vendor | undefined;
  // phone: string | undefined;
  // email: string | undefined;

  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.partNbr) this.partNbr = initializer.partNbr;
    if (initializer.name) this.name = initializer.name;
    if (initializer.price) this.price = initializer.price;
    if (initializer.unit) this.unit = initializer.unit;
    if (initializer.vendorId) this.vendorId = initializer.vendorId;
    if (initializer.vendor) this.vendor = initializer.vendor;
    // if (initializer.zip) this.zip = initializer.zip;
    // if (initializer.phone) this.phone = initializer.phone;
    // if (initializer.email) this.email = initializer.email;
  }
}
