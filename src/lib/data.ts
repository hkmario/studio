import type { Contract, Product, Bill } from './types';

export const contracts: Contract[] = [
  {
    AccountID: "ACC001",
    VendorName: "Comcast Business",
    ContractStartDate: "2023-01-15",
    ContractEndDate: "2024-08-14",
    ContractSum: 2400.00,
    BusinessUnit: "Headquarters",
    RenewalType: "Manual",
    Status: "Active",
    WorkflowID: "WF001",
    Comments: "Primary internet service for main office."
  },
  {
    AccountID: "ACC002",
    VendorName: "Verizon Fios",
    ContractStartDate: "2022-09-01",
    ContractEndDate: "2024-09-30",
    ContractSum: 1800.00,
    BusinessUnit: "East Wing",
    RenewalType: "Auto-Renew",
    Status: "Active",
    WorkflowID: "WF002",
    Comments: "Secondary ISP for redundancy."
  },
  {
    AccountID: "ACC003",
    VendorName: "AT&T Fiber",
    ContractStartDate: "2023-11-20",
    ContractEndDate: "2025-11-19",
    ContractSum: 3600.00,
    BusinessUnit: "West Wing",
    RenewalType: "Manual",
    Status: "Active",
    WorkflowID: "WF003",
    Comments: "High-speed fiber for development team."
  },
  {
    AccountID: "ACC004",
    VendorName: "Spectrum Business",
    ContractStartDate: "2022-06-01",
    ContractEndDate: "2024-05-31",
    ContractSum: 1500.00,
    BusinessUnit: "Marketing",
    RenewalType: "Manual",
    Status: "Expired",
    WorkflowID: "WF004",
    Comments: "Service for the marketing department."
  },
  {
    AccountID: "ACC005",
    VendorName: "Starlink Business",
    ContractStartDate: "2024-01-01",
    ContractEndDate: "2026-12-31",
    ContractSum: 6000.00,
    BusinessUnit: "Remote Office",
    RenewalType: "Auto-Renew",
    Status: "Active",
    WorkflowID: "WF005",
    Comments: "Satellite internet for remote site."
  }
];

export const products: Product[] = [
  {
    ProductID: "PROD001",
    AccountID: "ACC001",
    ProductName: "Business Internet 100",
    MonthlyCost: 100.00,
    BillingFrequency: "Monthly",
    Notes: "100 Mbps down / 20 Mbps up"
  },
  {
    ProductID: "PROD002",
    AccountID: "ACC002",
    ProductName: "Fios Gigabit Connection",
    MonthlyCost: 75.00,
    BillingFrequency: "Monthly",
    Notes: "940 Mbps down / 880 Mbps up"
  },
  {
    ProductID: "PROD003",
    AccountID: "ACC003",
    ProductName: "AT&T Business Fiber 300",
    MonthlyCost: 150.00,
    BillingFrequency: "Monthly",
    Notes: "300 Mbps symmetrical"
  },
  {
    ProductID: "PROD004",
    AccountID: "ACC004",
    ProductName: "Spectrum Business Internet",
    MonthlyCost: 62.50,
    BillingFrequency: "Monthly",
    Notes: "200 Mbps down / 10 Mbps up"
  },
  {
    ProductID: "PROD005",
    AccountID: "ACC005",
    ProductName: "Starlink Priority 1TB",
    MonthlyCost: 250.00,
    BillingFrequency: "Monthly",
    Notes: "High-performance satellite internet"
  }
];

export const bills: Bill[] = [
  {
    BillID: "BILL001",
    ProductID: "PROD001",
    BillingPeriod: "2024-07",
    MonthlyCost: 100.00,
    Status: "Paid",
    Comments: ""
  },
  {
    BillID: "BILL002",
    ProductID: "PROD002",
    BillingPeriod: "2024-07",
    MonthlyCost: 75.00,
    Status: "Paid",
    Comments: ""
  },
  {
    BillID: "BILL003",
    ProductID: "PROD003",
    BillingPeriod: "2024-07",
    MonthlyCost: 150.00,
    Status: "Due",
    Comments: "Payment scheduled for 25th"
  },
  {
    BillID: "BILL004",
    ProductID: "PROD005",
    BillingPeriod: "2024-07",
    MonthlyCost: 250.00,
    Status: "Paid",
    Comments: ""
  },
    {
    BillID: "BILL005",
    ProductID: "PROD001",
    BillingPeriod: "2024-06",
    MonthlyCost: 100.00,
    Status: "Paid",
    Comments: ""
  },
  {
    BillID: "BILL006",
    ProductID: "PROD002",
    BillingPeriod: "2024-06",
    MonthlyCost: 75.00,
    Status: "Paid",
    Comments: ""
  },
  {
    BillID: "BILL007",
    ProductID: "PROD003",
    BillingPeriod: "2024-06",
    MonthlyCost: 150.00,
    Status: "Paid",
    Comments: ""
  },
  {
    BillID: "BILL008",
    ProductID: "PROD005",
    BillingPeriod: "2024-06",
    MonthlyCost: 250.00,
    Status: "Paid",
    Comments: ""
  },
   {
    BillID: "BILL009",
    ProductID: "PROD001",
    BillingPeriod: "2024-05",
    MonthlyCost: 100.00,
    Status: "Paid",
    Comments: ""
  },
  {
    BillID: "BILL010",
    ProductID: "PROD002",
    BillingPeriod: "2024-05",
    MonthlyCost: 75.00,
    Status: "Paid",
    Comments: ""
  },
  {
    BillID: "BILL011",
    ProductID: "PROD003",
    BillingPeriod: "2024-05",
    MonthlyCost: 150.00,
    Status: "Paid",
    Comments: ""
  },
  {
    BillID: "BILL012",
    ProductID: "PROD005",
    BillingPeriod: "2024-05",
    MonthlyCost: 250.00,
    Status: "Paid",
    Comments: ""
  }
];
