import { Decimal } from '@prisma/client/runtime';

export interface InvoiceData {
  documentIssueDate: Date;
  documentNumber: string;
  customerName: string;
  customerTitle?: string;
  businessDetails: string;
  mSealsId?: string;
  notes: string;
  businessId: string;
}

export interface InvoiceProductData {
  itemOrder: number;
  transactionDate: Date;
  productName: string;
  quantity: number;
  unit: string;
  price: number;
  taxClassification: number;
  invoiceId: string;
}

export interface MSealResponse {
  id: string;
  name: string;
  imageUrl: string;
  selectFlag: number;
}

export interface InvoiceProductResponse {
  id: string;
  itemOrder: number;
  transactionDate?: Date;
  productName: string;
  quantity?: number;
  unit?: string;
  price?: Decimal;
  taxClassification: number;
}

export interface InvoiceResponse {
  id: string;
  businessId: string;
  documentIssueDate: Date;
  documentNumber: string;
  customerName: string;
  customerTitle?: string;
  businessDetails: string;
  notes?: string;
  mSeals?: MSealResponse;
  invoiceProducts: InvoiceProductResponse[];
}
