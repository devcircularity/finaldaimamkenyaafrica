'use client';

import React from 'react';
import Nav from '../../components/navigation/menu/Navbar';
import BurgerMenu from '../../components/navigation/menu/BurgerMenu'; // Burger Menu for mobile navigation
import Footer from '../../components/layout/Footer'; // Footer component
import ProductsHero from '../../components/hero/ProductsHero'; // A hero section specific to the Products page
import Modal from '../../components/layout/Modal'; // Modal for additional interactions
import { GlobalStateProvider } from '../../contexts/GlobalStateContext'; // Global context provider
import Link from 'next/link';
import { Products, Product } from 'boundless-commerce-components';
import { apiClient, revalidate } from '@/lib/api';
import { IProduct } from 'boundless-api-client';
import { fetchBasicSettings } from '@/lib/settings';

export default async function HomePage() {
  const products = await fetchProductsOnMain();
  const settings = await fetchBasicSettings();

  return (
    <GlobalStateProvider>
      {/* Common components */}
      <Modal />
      <BurgerMenu />
      <Nav />

      {/* Hero Section */}
      <ProductsHero title="Our Products" subtitle="Discover unique and sustainable products" />

      {/* Products Section */}
      <main>
        <div className="container py-12">
        <Products
  all={{ gap: 10, perRow: 2 }}
  sm={{ gap: 20, perRow: 3 }}
  lg={{ gap: 30, perRow: 4 }}
  xxl={{ gap: 20, perRow: 5 }}
>
  {products.map((product) => (
    <Product
      product={product}
      key={product.product_id}
      link={{ component: Link, href: `/products/${product.url_key || product.product_id}` }}
      apiClient={apiClient}
      settings={settings}
      className="custom-product" // Add a custom class to apply your styles
    />
  ))}
</Products>

        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </GlobalStateProvider>
  );
}

// Fetch Products
const fetchProductsOnMain = async (): Promise<IProduct[]> => {
  const { products } = await apiClient.catalog.getProducts(
    {
      collection: ['main-page'],
      sort: 'in_collection',
    },
    {
      next: {
        revalidate,
        tags: ['products'],
      },
    }
  );

  return products;
};
