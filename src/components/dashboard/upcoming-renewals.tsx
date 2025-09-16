import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { contracts } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { differenceInDays, format, parseISO } from "date-fns";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function UpcomingRenewals() {
    const upcoming = contracts
        .filter(c => {
            const endDate = parseISO(c.ContractEndDate);
            const daysLeft = differenceInDays(endDate, new Date());
            return daysLeft > 0 && daysLeft <= 90 && c.Status === 'Active';
        })
        .sort((a, b) => new Date(a.ContractEndDate).getTime() - new Date(b.ContractEndDate).getTime())
        .slice(0, 5);


  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Upcoming Renewals</CardTitle>
          <CardDescription>
            These contracts are expiring in the next 90 days.
          </CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1 bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/dashboard/contracts">
            View All
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="grid gap-6">
        {upcoming.length > 0 ? (
             upcoming.map(contract => {
                const daysLeft = differenceInDays(parseISO(contract.ContractEndDate), new Date());
                return (
                    <div key={contract.AccountID} className="flex items-center justify-between space-x-4">
                        <div className="flex items-center space-x-4">
                            <div>
                                <p className="text-sm font-medium leading-none">{contract.VendorName}</p>
                                <p className="text-sm text-muted-foreground">{contract.BusinessUnit}</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-right">{format(parseISO(contract.ContractEndDate), "MMM d, yyyy")}</p>
                            <p className="text-sm text-muted-foreground text-right">{daysLeft} days left</p>
                        </div>
                    </div>
                );
             })
        ): (
            <div className="text-center text-muted-foreground py-8">
                No contracts expiring soon.
            </div>
        )}
      </CardContent>
    </Card>
  )
}
