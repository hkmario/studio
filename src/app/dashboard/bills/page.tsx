import { BillsTable } from "@/components/dashboard/bills-table";
import type { Bill } from "@/lib/types";

async function getBills(): Promise<Bill[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/bills`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch bills');
  }
  return res.json();
}

export default async function BillsPage() {
  const bills = await getBills();
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Bills</h1>
      <BillsTable data={bills} />
    </div>
  );
}
