import { ContractsTable } from "@/components/dashboard/contracts-table";
import { getContracts } from "@/lib/db";

export default async function ContractsPage() {
  const contracts = await getContracts();
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Contracts</h1>
      <ContractsTable data={contracts} />
    </div>
  );
}
