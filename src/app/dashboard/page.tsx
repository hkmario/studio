import { OverviewCards } from "@/components/dashboard/overview-cards";
import { SpendingChart } from "@/components/dashboard/spending-chart";
import { UpcomingRenewals } from "@/components/dashboard/upcoming-renewals";
import { ContractsTable } from "@/components/dashboard/contracts-table";

export default function DashboardPage() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <OverviewCards />
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <SpendingChart />
        </div>
        <div>
          <UpcomingRenewals />
        </div>
      </div>
      <div>
        <ContractsTable />
      </div>
    </>
  );
}
