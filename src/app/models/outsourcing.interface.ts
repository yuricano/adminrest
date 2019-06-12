import { Address } from "./address";

export interface Outsourcing {
  id: string,
  client: Client,
  details: Details
}

interface Client {
  first_name: string,
  last_name: string,
  phone: string,
  address: string,
  email: string,
  location: string
  address_full: Address
}

interface Details {
  total: Number,
  comments: string
}
