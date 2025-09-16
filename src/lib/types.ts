export type Contract = {
  AccountID: string;
  VendorName: string;
  ContractStartDate: string; // YYYY-MM-DD
  ContractEndDate: string; // YYYY-MM-DD
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
  BillingPeriod: string; // YYYY-MM
  MonthlyCost: number;
  Status: 'Paid' | 'Due' | 'Overdue';
  Comments: string;
};
