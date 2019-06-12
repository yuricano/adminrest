export class Order {
  constructor(
    public id: string,
    public status_name: string,
    public status_number: number,
    public status_timestamp: any,
    public delayed_status: number,
    public eta: any,
    public coupon: any,
    public delivery_man: any,
    public establishment: any,
    public withdrawal_codes: any,
    public delivered_at: any
  ) {}


  get status_name_modif(): string {
    if ( this.status_name === 'Listo para recoger') {
      return 'Generado';
    } else {
      return this.status_name;
    }
  }


}
