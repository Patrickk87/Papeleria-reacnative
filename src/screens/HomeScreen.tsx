import { useCallback, useMemo, useState } from 'react';

import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  type ListRenderItem,
} from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { products } from '../data/products';
import type { Product } from '../types';
import { ItemCard } from '../components/ItemCard';
import { COLORS, SPACING, TYPOGRAPHY } from '../theme';
import type { HomeStackParamList } from '../navigation/types';

type HomeScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'HomeList'
>;

export default function HomeScreen({
  navigation,
}: HomeScreenProps): React.JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLocaleLowerCase('es-CO');

    if (!query) {
      return products;
    }

    return products.filter((product) => {
      const searchableText = [
        product.name,
        product.category,
        product.description,
      ]
        .join(' ')
        .toLocaleLowerCase('es-CO');

      return searchableText.includes(query);
    });
  }, [searchQuery]);

  const handleSelectProduct = useCallback(
    (product: Product): void => {
      navigation.navigate('HomeDetail', {
        id: product.id,
        name: product.name,
      });
    },
    [navigation],
  );

  const renderProduct: ListRenderItem<Product> = useCallback(
    ({ item }) => (
      <ItemCard
        product={item}
        onSelect={handleSelectProduct}
      />
    ),
    [handleSelectProduct],
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <View>
            <View style={styles.header}>
              <Text style={styles.logo}>PAPELERÍA</Text>
              <Text style={styles.subtitle}>
                Todo para estudiar y crear
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.title}>Nuestros productos</Text>

              <Text style={styles.description}>
                Encuentra los artículos que necesitas.
              </Text>
            </View>

            <View style={styles.searchContainer}>
              <TextInput
                style={styles.input}
                placeholder="Buscar productos..."
                placeholderTextColor={COLORS.muted}
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="search"
              />
            </View>

            <Text style={styles.resultCount}>
              {`${filteredProducts.length} productos encontrados`}
            </Text>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>
              No encontramos productos
            </Text>

            <Text style={styles.emptyDescription}>
              Intenta buscar con otro nombre o categoría.
            </Text>
          </View>
        }
        ListFooterComponent={
          <Text style={styles.footer}>
            Papelería · Catálogo de productos
          </Text>
        }
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: SPACING.xl,
    paddingTop: 30,
    paddingBottom: 35,
    flexGrow: 1,
  },
  header: {
    backgroundColor: COLORS.primary,
    padding: SPACING.xxl,
    borderRadius: 18,
    marginBottom: 28,
  },
  logo: {
    color: COLORS.surface,
    fontSize: 25,
    fontWeight: '800',
    letterSpacing: 2,
  },
  subtitle: {
    color: COLORS.primaryLight,
    fontSize: TYPOGRAPHY.subtitle,
    marginTop: SPACING.sm,
  },
  section: {
    marginBottom: SPACING.lg,
  },
  title: {
    fontSize: TYPOGRAPHY.title,
    fontWeight: '800',
    color: COLORS.text,
  },
  description: {
    color: COLORS.textSecondary,
    fontSize: TYPOGRAPHY.body,
    marginTop: SPACING.xs,
  },
  searchContainer: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    marginBottom: SPACING.md,
  },
  input: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    fontSize: TYPOGRAPHY.body,
    color: COLORS.text,
  },
  resultCount: {
    fontSize: TYPOGRAPHY.caption,
    color: COLORS.textSecondary,
    marginBottom: SPACING.lg,
  },
  emptyContainer: {
    alignItems: 'center',
    padding: SPACING.xxl,
    marginTop: SPACING.xxl,
  },
  emptyTitle: {
    fontSize: TYPOGRAPHY.productName,
    fontWeight: '700',
    color: COLORS.text,
    textAlign: 'center',
  },
  emptyDescription: {
    fontSize: TYPOGRAPHY.body,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: SPACING.sm,
  },
  footer: {
    textAlign: 'center',
    color: COLORS.muted,
    fontSize: TYPOGRAPHY.caption,
    marginTop: SPACING.md,
  },
});
