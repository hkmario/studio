import { NextResponse } from 'next/server';
import { bills } from '@/lib/data';

export async function GET() {
  return NextResponse.json(bills);
}
