import properties from '@/data/properties'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(properties)
}