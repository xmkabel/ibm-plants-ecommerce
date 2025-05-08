
import { PlantItem, Category } from '../types';
import { pexelsPlantImages } from '../utils/pexelsImages';

export const categories: Category[] = [
  { id: 'indoor', name: 'Indoor Plants' },
  { id: 'succulent', name: 'Succulents' },
  { id: 'tropical', name: 'Tropical Plants' },
  { id: 'flowering', name: 'Flowering Plants' },
];

export const plantData: PlantItem[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    price: 29.99,
    description: 'Popular indoor plant with iconic split leaves.',
    image: pexelsPlantImages['Monstera Deliciosa'],
    category: 'indoor',
  },
  {
    id: '2',
    name: 'Snake Plant',
    price: 19.99,
    description: 'Low-maintenance plant that purifies air.',
    image: pexelsPlantImages['Snake Plant'],
    category: 'indoor',
  },
  {
    id: '3',
    name: 'Fiddle Leaf Fig',
    price: 39.99,
    description: 'Trendy plant with large, violin-shaped leaves.',
    image: pexelsPlantImages['Fiddle Leaf Fig'],
    category: 'indoor',
  },
  {
    id: '4',
    name: 'Aloe Vera',
    price: 14.99,
    description: 'Medicinal plant with fleshy leaves.',
    image: pexelsPlantImages['Aloe Vera'],
    category: 'succulent',
  },
  {
    id: '5',
    name: 'Echeveria',
    price: 9.99,
    description: 'Rosette-forming succulent with colorful leaves.',
    image: pexelsPlantImages['Echeveria'],
    category: 'succulent',
  },
  {
    id: '6',
    name: 'Jade Plant',
    price: 15.99,
    description: 'Symbol of good luck and prosperity.',
    image: pexelsPlantImages['Jade Plant'],
    category: 'succulent',
  },
  {
    id: '7',
    name: 'Bird of Paradise',
    price: 45.99,
    description: 'Dramatic plant with banana-like leaves.',
    image: pexelsPlantImages['Bird of Paradise'],
    category: 'tropical',
  },
  {
    id: '8',
    name: 'Majesty Palm',
    price: 34.99,
    description: 'Elegant palm that adds tropical vibes.',
    image: pexelsPlantImages['Majesty Palm'],
    category: 'tropical',
  },
  {
    id: '9',
    name: 'Orchid',
    price: 24.99,
    description: 'Exotic blooms that last for months.',
    image: pexelsPlantImages['Orchid'],
    category: 'flowering',
  },
  {
    id: '10',
    name: 'Peace Lily',
    price: 22.99,
    description: 'Air-purifying plant with white blooms.',
    image: pexelsPlantImages['Peace Lily'],
    category: 'flowering',
  },
  {
    id: '11',
    name: 'Pothos',
    price: 16.99,
    description: 'Easy-growing vine with heart-shaped leaves.',
    image: pexelsPlantImages['Pothos'],
    category: 'indoor',
  },
  {
    id: '12',
    name: 'ZZ Plant',
    price: 25.99,
    description: 'Nearly indestructible plant with glossy leaves.',
    image: pexelsPlantImages['ZZ Plant'],
    category: 'indoor',
  },
];
