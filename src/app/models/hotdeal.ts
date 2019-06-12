
export class Hotdeal {
  id: string;
  code: string;
  title: string;
  hotdeal_type: number;
  hotdeal_type_name: string;
  discount_value = 0;
  init_date: any;
  expiration_date: any;
  is_multiple: boolean;
  is_user_limited: boolean;
  is_active: boolean;
  user_limited: number;
  image?: File;
  image_url?: string;
  establishment_id: string;
  hotdeal_products: any;
  constructor() {
    this.hotdeal_type = 1;
    this.is_multiple = false;
    this.is_user_limited = false;
    this.is_active = true;
  }
}
