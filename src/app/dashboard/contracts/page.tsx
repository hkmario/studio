import { ContractsTable } from "@/components/dashboard/contracts-table";
import type { Contract } from "@/lib/types";

async function getContracts(): Promise<Contract[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/contracts`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch contracts');
  }
  return res.json();
}


export default async function ContractsPage() {
  const contracts = await getContracts();
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Contracts</h1>
      <ContractsTable data={contracts} />
    </div>
  );
}
