import { NextResponse } from 'next/server'

export async function GET(request, { params }) {
  const properties = [
    {
      id: 1,
      title: 'Luxury Villa with Ocean View',
      price: '$1,500,000',
      location: 'Malibu, CA',
      bedrooms: 5,
      bathrooms: 4,
      area: '3,500 sqft',
      images: ['https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&w=400'],
      reference: 'REF123',
      buyOrRent: 'buy',
      propertyType: 'apartment',
      neighborhood: 'neighborhood1',
    },
    {
      id: 2,
      title: 'Modern Downtown Apartment',
      price: '$800,000',
      location: 'New York, NY',
      bedrooms: 2,
      bathrooms: 2,
      area: '1,200 sqft',
      images: ['https://images.pexels.com/photos/3288104/pexels-photo-3288104.png?auto=compress&cs=tinysrgb&w=400'],
      reference: 'REF456',
      buyOrRent: 'rental',
      propertyType: 'office_apartment',
      neighborhood: 'neighborhood2',
    },
    {
      id: 3,
      title: 'Countryside Estate with Acreage',
      price: '$2,200,000',
      location: 'Aspen, CO',
      bedrooms: 6,
      bathrooms: 5,
      area: '6,000 sqft',
      images: ['https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=400'],
      reference: 'REF789',
      buyOrRent: 'buy',
      propertyType: 'furnished_apartment',
      neighborhood: 'neighborhood3',
    },
    // Add more properties with the same structure
  ];

  // console.log(, params.id)
  return NextResponse.json(properties.filter(prp => prp.id == params.id)[0])
}