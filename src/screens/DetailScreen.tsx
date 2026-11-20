import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useRoute, type RouteProp } from '@react-navigation/native';

import { products } from '../data/products';
import { COLORS, SPACING, TYPOGRAPHY } from '../theme';

import type { HomeStackParamList } from '../navigation/types';

export default function DetailScreen(): React.JSX.Element {
  const route = useRoute<RouteProp<HomeStackParamList, 'HomeDetail'>>();

  const { id, name } = route.params;

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>Producto no encontrado</Text>
        <Text style={styles.description}>
          No pudimos encontrar la información de este producto.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: product.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.category}>{product.category}</Text>

        <Text style={styles.title}>{name}</Text>

        <Text style={styles.price}>
          {`$ ${product.price.toLocaleString('es-CO')}`}
        </Text>

        <Text style={styles.sectionTitle}>Descripción</Text>
        <Text style={styles.description}>
          {product.description}
        </Text>

        <Text style={styles.sectionTitle}>Disponibilidad</Text>
        <Text style={styles.stock}>
          {`${product.stock} unidades disponibles`}
        </Text>

        <Text style={styles.productId}>
          {`Código del producto: ${product.id}`}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  image: {
    width: '100%',
    height: 280,
  },
  content: {
    padding: SPACING.xl,
  },
  category: {
    color: COLORS.primary,
    fontSize: TYPOGRAPHY.caption,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  title: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.title,
    fontWeight: '800',
    marginTop: SPACING.sm,
  },
  price: {
    color: COLORS.primary,
    fontSize: 24,
    fontWeight: '800',
    marginTop: SPACING.md,
  },
  sectionTitle: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.productName,
    fontWeight: '700',
    marginTop: SPACING.xxl,
    marginBottom: SPACING.sm,
  },
  description: {
    color: COLORS.textSecondary,
    fontSize: TYPOGRAPHY.body,
    lineHeight: 22,
  },
  stock: {
    color: COLORS.stock,
    fontSize: TYPOGRAPHY.body,
    fontWeight: '600',
  },
  productId: {
    color: COLORS.muted,
    fontSize: TYPOGRAPHY.caption,
    marginTop: SPACING.xxl,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xl,
    backgroundColor: COLORS.background,
  },
  emptyTitle: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.title,
    fontWeight: '700',
  },
});
