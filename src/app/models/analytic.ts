export class Analytic {
  orders: Order;
  totals: Total;
}

export class EstablishmentAnalytic {
  average_accept_time: string;
  average_prepare_time: string;
  establishment_id: string;
  establishment_name: string;
  total_sales: string;
}

export class DriverAnalytic {
  orders_count: Number;
  delivery_man_id: string;
  first_name: string;
  last_name: string;
  average_pick_up_time: Number;
  average_delivery_time: Number;
  total_tip: Number;
}

export class DriverGlobalAnalytic {
  orders_count: string;
  average_pick_up_time: Number;
  average_delivery_time: Number;
  total_tip: Number;
}

export class EstablishmentOrderAnalytic {
  acceptance_time: Number;
  assignation_time: Number;
  client_name: string;
  created_at: string;
  delivery_man_name: string;
  delivery_time: Number;
  id: string;
  is_outsourcing: boolean;
  order_number: string;
  picking_up_time: Number;
  preparation_time: Number;
  shipping: Number;
  status: Number;
  subtotal: Number;
  tip: Number;
  total: Number;
}

export class EstablishmentGlobalOrderAnalytic {
  orders_count: Number;
  deliverit_orders_count: Number;
  outsourcing_orders_count: Number;
  outsourcing_orders_total: Number;
}

class Order {
  total_count: Number;
  created_orders_count: Number;
  accepted_orders_count: Number;
  done_orders_count: Number;
  delivery_man_accepted_orders_count: Number;
  picked_up_orders_count: Number;
  delivered_orders_count: Number;
  canceled_orders_count: Number;
  not_payed_orders_count: Number;
}

class Total {
  tip: Number;
  sales: Number;
  revenue: Number;
}
