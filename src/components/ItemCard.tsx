import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import type { Product } from '../types';
import { COLORS, SPACING, TYPOGRAPHY } from '../theme';

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
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.lg,
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
    padding: SPACING.md,
    justifyContent: 'space-between',
  },
  category: {
    fontSize: TYPOGRAPHY.small,
    fontWeight: '700',
    color: COLORS.primary,
    textTransform: 'uppercase',
  },
  name: {
    fontSize: TYPOGRAPHY.productName,
    fontWeight: '700',
    color: COLORS.text,
  },
  description: {
    fontSize: TYPOGRAPHY.body,
    color: COLORS.textSecondary,
    lineHeight: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: SPACING.xs,
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.primary,
  },
  stock: {
    fontSize: TYPOGRAPHY.small,
    color: COLORS.stock,
  },
  action: {
    fontSize: TYPOGRAPHY.caption,
    fontWeight: '700',
    color: COLORS.primary,
    marginTop: SPACING.sm,
  },
});
