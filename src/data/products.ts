
import type { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Cuaderno argollado',
    category: 'Cuadernos',
    price: 12000,
    stock: 25,
    description: 'Cuaderno de 100 hojas cuadriculadas.',
    imageUrl: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500',
  },
  {
    id: '2',
    name: 'Lapiceros de colores',
    category: 'Escritura',
    price: 8500,
    stock: 40,
    description: 'Set de lapiceros de diferentes colores.',
    imageUrl: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500',
  },
  {
    id: '3',
    name: 'Resaltadores',
    category: 'Escritura',
    price: 10000,
    stock: 18,
    description: 'Set de resaltadores para estudio.',
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500',
  },
];
