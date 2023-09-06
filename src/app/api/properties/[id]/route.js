import { NextResponse } from 'next/server'
import properties from '@/data/properties'

export async function GET(request, { params }) {

  // console.log(, params.id)
  return NextResponse.json(properties.filter(prp => prp.id == params.id)[0])
}