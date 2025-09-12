import {
  File,
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
import { contracts } from "@/lib/data"
import { format, parseISO } from 'date-fns';

export function ContractsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contracts</CardTitle>
        <CardDescription>
          Manage your contracts and view their status.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Vendor</TableHead>
              <TableHead className="hidden md:table-cell">
                Account ID
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">
                Contract Sum
              </TableHead>
              <TableHead className="hidden md:table-cell">
                End Date
              </TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contracts.map(contract => (
              <TableRow key={contract.AccountID}>
                <TableCell className="font-medium">{contract.VendorName}</TableCell>
                <TableCell className="hidden md:table-cell">{contract.AccountID}</TableCell>
                <TableCell>
                  <Badge variant={contract.Status === 'Active' ? 'secondary' : contract.Status === 'Expired' ? 'destructive' : 'outline'}>
                    {contract.Status}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                    ${contract.ContractSum.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                    {format(parseISO(contract.ContractEndDate), "MMM d, yyyy")}
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
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
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
          Showing <strong>1-5</strong> of <strong>{contracts.length}</strong> contracts
        </div>
      </CardFooter>
    </Card>
  )
}
