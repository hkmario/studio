import { NextResponse } from 'next/server';
import { contracts } from '@/lib/data';

export async function GET() {
  return NextResponse.json(contracts);
}
