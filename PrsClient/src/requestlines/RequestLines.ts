import { Product } from "../products/Products";
import { User } from "../users/User";
import { Vendor } from "../vendors/Vendor";

export class RequestLine {
  id: number | undefined = undefined;
  requestId: number | undefined;
  productId: number | undefined;
  quantity: number | undefined;
  product: Product | undefined;
  user: User | undefined;

  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;

    if (initializer.id) this.id = initializer.id;
    if (initializer.requestId) this.requestId = initializer.requestId;
    if (initializer.productId) this.productId = initializer.productId;
    if (initializer.quantity) this.quantity = initializer.quantity;
    if (initializer.product) this.product = initializer.product;
    if (initializer.user) this.user = initializer.user;
  }
}
