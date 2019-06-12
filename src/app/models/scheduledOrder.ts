export class ScheduledOrder {
  constructor(
    public id: string,
    public status_name: string,
    public status_number: number,
    public status_timestamp: any,
    public coupon: any,
    public establishment: any,
    public withdrawal_codes: any,
    public delivered_at: any
  ) {}
}
