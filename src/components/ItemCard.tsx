import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import type { Product } from '../types';

interface ItemCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ItemCard({
  product,
  onSelect,
}: ItemCardProps): React.JSX.Element {
  return (
    <Pressable
      onPress={() => onSelect(product)}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
    >
      <Image
        source={{ uri: product.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.info}>
        <Text style={styles.category}>{product.category}</Text>

        <Text style={styles.name}>{product.name}</Text>

        <Text style={styles.description}>
          {product.description}
        </Text>

        <View style={styles.footer}>
          <Text style={styles.price}>
            {`$ ${product.price.toLocaleString('es-CO')}`}
          </Text>

          <Text style={styles.stock}>
            {`Stock: ${product.stock}`}
          </Text>
        </View>

        <Text style={styles.action}>Ver producto</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E8E2D9',
    marginBottom: 16,
    overflow: 'hidden',
  },
  cardPressed: {
    opacity: 0.7,
  },
  image: {
    width: 112,
    height: 170,
  },
  info: {
    flex: 1,
    padding: 14,
    justifyContent: 'space-between',
  },
  category: {
    fontSize: 11,
    fontWeight: '700',
    color: '#8B7355',
    textTransform: 'uppercase',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#292524',
  },
  description: {
    fontSize: 12,
    color: '#78716C',
    lineHeight: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 6,
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
    color: '#256D5A',
  },
  stock: {
    fontSize: 11,
    color: '#57534E',
  },
  action: {
    fontSize: 12,
    fontWeight: '700',
    color: '#256D5A',
    marginTop: 8,
  },
});
