import { OverviewCards } from "@/components/dashboard/overview-cards";
import { SpendingChart } from "@/components/dashboard/spending-chart";
import { UpcomingRenewals } from "@/components/dashboard/upcoming-renewals";
import { ContractsTable } from "@/components/dashboard/contracts-table";
import { getContracts, getProducts, getBills } from "@/lib/db";

export default async function DashboardPage() {
  const [contracts, products, bills] = await Promise.all([
    getContracts(),
    getProducts(),
    getBills()
  ]);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <OverviewCards contracts={contracts} products={products} />
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <SpendingChart bills={bills} />
        </div>
        <div>
          <UpcomingRenewals contracts={contracts} />
        </div>
      </div>
      <div>
        <ContractsTable data={contracts} />
      </div>
    </>
  );
}
