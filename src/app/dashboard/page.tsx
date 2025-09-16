import { OverviewCards } from "@/components/dashboard/overview-cards";
import { SpendingChart } from "@/components/dashboard/spending-chart";
import { UpcomingRenewals } from "@/components/dashboard/upcoming-renewals";
import { ContractsTable } from "@/components/dashboard/contracts-table";
import type { Contract, Product, Bill } from "@/lib/types";

async function getData(): Promise<{ contracts: Contract[], products: Product[], bills: Bill[] }> {
  const [contractsRes, productsRes, billsRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/contracts`, { cache: 'no-store' }),
    fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/products`, { cache: 'no-store' }),
    fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/bills`, { cache: 'no-store' })
  ]);

  if (!contractsRes.ok || !productsRes.ok || !billsRes.ok) {
    throw new Error('Failed to fetch data');
  }

  const contracts = await contractsRes.json();
  const products = await productsRes.json();
  const bills = await billsRes.json();

  return { contracts, products, bills };
}


export default async function DashboardPage() {
  const { contracts, products, bills } = await getData();

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
