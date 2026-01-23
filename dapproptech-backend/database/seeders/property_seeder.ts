import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Property from '#models/property'
import User from '#models/user'
import { RoleType } from '#models/role'

export default class extends BaseSeeder {
  async run() {

    const agents = await User.query()
      .whereHas('roles', (query) => {
        query.where('name', RoleType.AGENT)
    })

    if (agents.length === 0) {
      console.log('NO AGENTS FOUND')
      return
    }
    const propertyData = [
      {
        title: 'Bahay ni Kuya',
        location: 'Masiwa, Marigondon',
        price: 25000000,
        type: 'House & Lot',
        beds: 2,
        baths: 2,
        sqm: 500,
        imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop'
      },
      {
        title: 'Ambot Sa Kanding',
        location: 'Mar Beach',
        price: 69000000,
        type: 'Condominium',
        beds: 2,
        baths: 2,
        sqm: 150,
        imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop'
      },
      {
        title: 'Dihhh',
        location: 'On Jahseh',
        price: 67676767,
        type: 'Luxury Unit',
        beds: 2,
        baths: 2,
        sqm: 6000,
        imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop'
      },
      {
        title: 'Bahay ni Kuya (FEATURED)',
        location: 'Masiwa, Marigondon',
        price: 25000000,
        type: 'House & Lot',
        beds: 2,
        baths: 2,
        sqm: 500,
        isFeatured: true,
        imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop'
      },
      {
        title: 'Bahay ni Kuya (FEATURED)',
        location: 'Masiwa, Marigondon',
        price: 25000000,
        type: 'House & Lot',
        beds: 2,
        baths: 2,
        sqm: 500,
        isFeatured: true,
        imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop'
      },
      {
        title: 'Bahay ni Kuya (FEATURED)',
        location: 'Masiwa, Marigondon',
        price: 25000000,
        type: 'House & Lot',
        beds: 2,
        baths: 2,
        sqm: 500,
        isFeatured: true,
        imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop'
      },
      {
        title: 'Bahay ni Kuya (FEATURED)',
        location: 'Masiwa, Marigondon',
        price: 25000000,
        type: 'House & Lot',
        beds: 2,
        baths: 2,
        sqm: 500,
        isFeatured: true,
        imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop'
      },
      {
        title: 'Bahay ni Kuya (FEATURED)',
        location: 'Masiwa, Marigondon',
        price: 25000000,
        type: 'House & Lot',
        beds: 2,
        baths: 2,
        sqm: 500,
        isFeatured: true,
        imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop'
      },
      {
        title: 'Bahay ni Kuya (FEATURED)',
        location: 'Masiwa, Marigondon',
        price: 25000000,
        type: 'House & Lot',
        beds: 2,
        baths: 2,
        sqm: 500,
        isFeatured: true,
        imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop'
      },
    ];

    for (const prop of propertyData) {
      const randomAgent = agents[Math.floor(Math.random() * agents.length)]

      await Property.create({
        ...prop,
        userId: randomAgent.id
      })
    }
    console.log("successfully created properties")
  }
}
