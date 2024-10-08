import { Product } from "../products/Products";
import { User } from "../users/User";

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
  }
}
