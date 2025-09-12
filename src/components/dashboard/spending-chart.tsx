"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { bills, products } from "@/lib/data";
import { format, subMonths, parse } from 'date-fns';

const getMonthlySpending = () => {
    const monthlyTotals: { [key: string]: number } = {};
    const now = new Date();

    for (let i = 5; i >= 0; i--) {
        const month = format(subMonths(now, i), 'MMM');
        monthlyTotals[month] = 0;
    }
    
    bills.forEach(bill => {
        const billMonth = format(parse(bill.BillingPeriod, 'yyyy-MM', new Date()), 'MMM');
        if(monthlyTotals.hasOwnProperty(billMonth)) {
             monthlyTotals[billMonth] += bill.MonthlyCost;
        }
    });

    return Object.keys(monthlyTotals).map(month => ({
        name: month,
        total: monthlyTotals[month],
    }));
}


export function SpendingChart() {
    const data = getMonthlySpending();
    return (
        <Card>
            <CardHeader>
                <CardTitle>Monthly Spending</CardTitle>
                <CardDescription>An overview of your spending for the last 6 months.</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
                <ResponsiveContainer width="100%" height={350}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    />
                    <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                    />
                     <Tooltip 
                        cursor={{fill: 'hsl(var(--secondary))'}}
                        content={({ active, payload, label }) =>
                            active && payload && payload.length ? (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                                <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                                    Month
                                    </span>
                                    <span className="font-bold text-foreground">{label}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                                    Spending
                                    </span>
                                    <span className="font-bold text-foreground">
                                        ${payload[0].value?.toLocaleString()}
                                    </span>
                                </div>
                                </div>
                            </div>
                            ) : null
                        }
                     />
                    <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
