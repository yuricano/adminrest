export class Route {
  comments: string;
  delivery_man: string;
  establishment_name: string;
  establishment: any;
  user: any;
  source: Array<string>;
  destination: Array<string>;
  constructor(order) {
    this.comments = order.shipping_address_comments || '';
    this.delivery_man = order.delivery_man ? order.delivery_man.name : '';
    this.establishment_name = order.establishment_name;
    this.source = order.establishment_location.split(',').map(Number);
    this.destination = order.shipping_address_location.split(',').map(Number);
    this.user = order.user;
    this.establishment = order.establishment;
  }
}
