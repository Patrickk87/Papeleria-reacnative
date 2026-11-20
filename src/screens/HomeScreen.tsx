
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { products } from '../data/products';
import type { Product } from '../types';
import { ItemCard } from '../components/ItemCard';

export default function HomeScreen(): React.JSX.Element {
  const handleSelectProduct = (product: Product): void => {
    Alert.alert(
      'Producto seleccionado',
      `${product.name}\nPrecio: $ ${product.price.toLocaleString('es-CO')}\nStock: ${product.stock}`,
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
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

      <View style={styles.productList}>
        {products.map((product) => (
          <ItemCard
            key={product.id}
            product={product}
            onSelect={handleSelectProduct}
          />
        ))}
      </View>

      <Text style={styles.footer}>
        Papelería · Catálogo de productos
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5F0',
  },
  content: {
    padding: 20,
    paddingTop: 55,
    paddingBottom: 35,
  },
  header: {
    backgroundColor: '#256D5A',
    padding: 24,
    borderRadius: 18,
    marginBottom: 28,
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '800',
    letterSpacing: 2,
  },
  subtitle: {
    color: '#E4F1E9',
    fontSize: 14,
    marginTop: 8,
  },
  section: {
    marginBottom: 18,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#292524',
  },
  description: {
    color: '#78716C',
    fontSize: 13,
    marginTop: 6,
  },
  productList: {
    marginTop: 5,
  },
  footer: {
    textAlign: 'center',
    color: '#A8A29E',
    fontSize: 12,
    marginTop: 12,
  },
});
