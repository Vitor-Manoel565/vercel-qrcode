export interface User {
  email: string;
  name: string;
  cpf: string;
  phone: string;
  product?: {
    offerId: string;
    eventName: string;
    price: number;
    address: string;
    offerName: string;
    createdAt: string;
    statusPayment: string;
    validated: boolean;
  };
  validatedAt?: string;
}

export interface Error {
  message: string;
  error: string;
  statusCode: number;
}
