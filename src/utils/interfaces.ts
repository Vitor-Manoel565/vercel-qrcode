export interface User {
  email: string;
  name: string;
  cpf: string;
  phone: string;
  qrcode: string;
  typeTicket?: string;
  price?: number;
  city?: string;
  date?: string;
  sector?: string;
  createdAt?: string;
  validated: boolean;
}

export interface Error {
  message: string;
  error: string;
  statusCode: number;
}
