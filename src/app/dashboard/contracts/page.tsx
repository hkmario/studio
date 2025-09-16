import { ContractsTable } from "@/components/dashboard/contracts-table";

export default function ContractsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Contracts</h1>
      <ContractsTable />
    </div>
  );
}
