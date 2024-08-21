import { User } from "../users/User";

export class RequestLines {
  id: number | undefined;
  vendorId: number | undefined;
  userId: number | undefined;
  vendor = "";
  user: User | undefined;

  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.vendorId) this.vendorId = initializer.vendorId;
    if (initializer.userId) this.userId = initializer.userId;
    if (initializer.vendor) this.vendor = initializer.vendor;
    if (initializer.user) this.user = initializer.user;
  }
}