import { BillsTable } from "@/components/dashboard/bills-table";
import { getBills } from "@/lib/db";

export default async function BillsPage() {
  const bills = await getBills();
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Bills</h1>
      <BillsTable data={bills} />
    </div>
  );
}
