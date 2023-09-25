import properties from '@/data/properties'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const buyOrRent = searchParams.get('buyOrRent')
  const type = searchParams.get('type')
  const location = searchParams.get('location')

  if (!buyOrRent || !type || !location) {
    return NextResponse.json(properties)
  }

  const filteredProperties = properties.filter((property) => {
    return (
      (buyOrRent === 'all' || property.buyOrRent === buyOrRent) &&
      (type === 'all' || property.type === type) &&
      (location === 'all' || property.location === location)
    );
  });

  return NextResponse.json(filteredProperties)

}