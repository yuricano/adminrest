export class Coupon {
  id: string;
  code: string;
  coupon_type: any;
  coupon_type_name: string;
  discount_value: number;
  expiration_date: Date;
  is_multiple: boolean;
  is_user_limited: boolean;
  user_limited: number;
  constructor() {
    this.coupon_type = "1";
    this.is_multiple = false;
    this.is_user_limited = false;
  }
}