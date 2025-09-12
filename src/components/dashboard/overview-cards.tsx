import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, FileCheck, DollarSign, AlertTriangle } from "lucide-react";
import { contracts, products } from "@/lib/data";
import { differenceInDays, parseISO } from "date-fns";

export function OverviewCards() {
  const totalContracts = contracts.length;
  const activeContracts = contracts.filter(c => c.Status === 'Active').length;
  
  const activeProductIds = contracts
    .filter(c => c.Status === 'Active')
    .map(c => c.AccountID);
  
  const totalMonthlyCost = products
    .filter(p => activeProductIds.includes(p.AccountID))
    .reduce((sum, p) => sum + p.MonthlyCost, 0);

  const expiringSoonCount = contracts.filter(c => {
    const endDate = parseISO(c.ContractEndDate);
    const daysLeft = differenceInDays(endDate, new Date());
    return daysLeft > 0 && daysLeft <= 90 && c.Status === 'Active';
  }).length;

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Contracts</CardTitle>
          <FileText className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalContracts}</div>
          <p className="text-xs text-muted-foreground">All contracts in the system</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Contracts</CardTitle>
          <FileCheck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{activeContracts}</div>
          <p className="text-xs text-muted-foreground">Currently active agreements</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Monthly Cost</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalMonthlyCost.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">For all active contracts</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Expiring Soon</CardTitle>
          <AlertTriangle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+{expiringSoonCount}</div>
          <p className="text-xs text-muted-foreground">Contracts expiring in next 90 days</p>
        </CardContent>
      </Card>
    </>
  );
}
