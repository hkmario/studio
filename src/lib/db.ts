import 'server-only';
import mysql from 'mysql2/promise';
import type { Bill, Contract, Product } from './types';
import { format } from 'date-fns';

const connection = mysql.createPool(process.env.DATABASE_URL!);

// Helper to format date fields from DB (YYYY-MM-DD) to string
const formatDateFields = (item: any, fields: string[]) => {
  const newItem = { ...item };
  fields.forEach(field => {
    if (newItem[field]) {
      newItem[field] = format(new Date(newItem[field]), 'yyyy-MM-dd');
    }
  });
  return newItem;
};

export async function getContracts(): Promise<Contract[]> {
    const [rows] = await connection.execute("SELECT * FROM contracts");
    const contracts = (rows as any[]).map(c => formatDateFields(c, ['ContractStartDate', 'ContractEndDate']));
    return contracts as Contract[];
}

export async function getProducts(): Promise<Product[]> {
    const [rows] = await connection.execute("SELECT * FROM products");
    return rows as Product[];
}

export async function getBills(): Promise<Bill[]> {
    const [rows] = await connection.execute("SELECT * FROM bills");
    return rows as Bill[];
}
