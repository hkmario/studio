import {
  MoreHorizontal,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { Bill } from "@/lib/types"
import { format, parse } from 'date-fns';

export function BillsTable({ data }: { data: Bill[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bills</CardTitle>
        <CardDescription>
          Manage your bills and view their payment status.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Bill ID</TableHead>
              <TableHead className="hidden md:table-cell">
                Product ID
              </TableHead>
              <TableHead>Billing Period</TableHead>
              <TableHead className="hidden md:table-cell">
                Amount
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map(bill => (
              <TableRow key={bill.BillID}>
                <TableCell className="font-medium">{bill.BillID}</TableCell>
                <TableCell className="hidden md:table-cell">{bill.ProductID}</TableCell>
                <TableCell>
                  {format(parse(bill.BillingPeriod, 'yyyy-MM', new Date()), "MMMM yyyy")}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                    ${bill.MonthlyCost.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                </TableCell>
                <TableCell>
                  <Badge variant={bill.Status === 'Paid' ? 'secondary' : bill.Status === 'Overdue' ? 'destructive' : 'outline'}>
                    {bill.Status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Mark as Paid</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-{data.length > 5 ? 5 : data.length}</strong> of <strong>{data.length}</strong> bills
        </div>
      </CardFooter>
    </Card>
  )
}
