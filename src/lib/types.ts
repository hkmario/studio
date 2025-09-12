export type Contract = {
  AccountID: string;
  VendorName: string;
  ContractStartDate: string;
  ContractEndDate: string;
  ContractSum: number;
  BusinessUnit: string;
  RenewalType: 'Auto-Renew' | 'Manual';
  Status: 'Active' | 'Expired' | 'Pending';
  WorkflowID: string;
  Comments: string;
};

export type Product = {
  ProductID: string;
  AccountID: string;
  ProductName: string;
  MonthlyCost: number;
  BillingFrequency: 'Monthly' | 'Quarterly' | 'Annually';
  Notes: string;
};

export type Bill = {
  BillID: string;
  ProductID: string;
  BillingPeriod: string; // e.g., "2024-07"
  MonthlyCost: number;
  Status: 'Paid' | 'Due' | 'Overdue';
  Comments: string;
};
