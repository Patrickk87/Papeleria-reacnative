import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { products } from '../data/products';
import { COLORS, SPACING, TYPOGRAPHY } from '../theme';
import type { Product } from '../types';

// Tres productos iniciales para demostrar la pantalla de favoritos.
const favoriteProducts: Product[] = products.slice(0, 3);

export default function FavoritesScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mis favoritos</Text>
        <Text style={styles.subtitle}>
          Tus productos de papelería guardados.
        </Text>
      </View>

      <FlatList
        data={favoriteProducts}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.image}
              resizeMode="cover"
            />

            <View style={styles.info}>
              <Text style={styles.category}>{item.category}</Text>

              <Text style={styles.name}>{item.name}</Text>

              <Text style={styles.description}>
                {item.description}
              </Text>

              <Text style={styles.price}>
                {`$ ${item.price.toLocaleString('es-CO')}`}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.xxl,
    paddingBottom: SPACING.lg,
  },
  title: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.title,
    fontWeight: '800',
  },
  subtitle: {
    color: COLORS.textSecondary,
    fontSize: TYPOGRAPHY.body,
    marginTop: SPACING.xs,
  },
  list: {
    paddingHorizontal: SPACING.xl,
    paddingBottom: SPACING.xxl,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: 'hidden',
    marginBottom: SPACING.lg,
  },
  image: {
    width: 105,
    height: 145,
  },
  info: {
    flex: 1,
    padding: SPACING.md,
    justifyContent: 'center',
  },
  category: {
    color: COLORS.primary,
    fontSize: TYPOGRAPHY.small,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  name: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.productName,
    fontWeight: '700',
    marginTop: SPACING.xs,
  },
  description: {
    color: COLORS.textSecondary,
    fontSize: TYPOGRAPHY.caption,
    marginTop: SPACING.xs,
  },
  price: {
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: '800',
    marginTop: SPACING.sm,
  },
});
