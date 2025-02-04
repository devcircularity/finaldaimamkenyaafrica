// /app/products/[slug]/page.tsx

import React from 'react';
import Nav from '@/components/navigation/menu/Navbar'; // Navigation bar
import BurgerMenu from '@/components/navigation/menu/BurgerMenu'; // Burger menu for mobile navigation
import Modal from '@/components/layout/Modal'; // Modal for additional interactions
import Footer from '@/components/layout/Footer'; // Footer section
import ProductHero from '@/components/hero/ProductsHero'; // Hero specific to the Product page
import SDGGallery from '@/components/SDGGallery/SDGGallery'; // SDG Gallery component
import { GlobalStateProvider } from '../../../contexts/GlobalStateContext'; // Global context provider
import { ProductLabels, ProductAttrs } from 'boundless-commerce-components';
import dynamic from 'next/dynamic'; // For dynamic imports
import type { Metadata } from 'next';
import { fetchBasicSettings } from '@/lib/settings';
import { apiClient, revalidate } from '@/lib/api';
import { notFound } from 'next/navigation';
import { IAdapterNegativeResponse, IProductItem } from 'boundless-api-client';

// Dynamically import client components with SSR disabled
const AddToCart = dynamic(() => import('@/components/product/addToCart'), { ssr: false });
const VariantPicker = dynamic(() => import('@/components/product/variantPicker'), { ssr: false });
const PriceAndSku = dynamic(() => import('@/components/product/priceAndSku'), { ssr: false });
const ProductGalleryBody = dynamic(() => import('@/components/product/productGalleryBody'), { ssr: false });

export default async function ProductPage({ params: { slug } }: IProps) {
  const product = await fetchProductBySlug(slug);
  const settings = await fetchBasicSettings();

  if (!product) {
    return notFound();
  }

  return (
    <GlobalStateProvider>
      {/* Global Components */}
      <Modal />
      <BurgerMenu />
      <Nav />

      {/* Product Hero Section 
      <ProductHero title={product.title} />
*/}
      {/* Product Details Section */}
      <main>
        <div className="container py-12">
          <h1 className="mb-4 text-3xl font-bold">{product.title}</h1>
          {product.labels && <ProductLabels labels={product.labels} className="mb-4" />}

          <div className="row">
            <div className="col-md-7">
              <ProductGalleryBody product={product} />
            </div>
            <div className="col-md-5">
              <div className="bg-light p-4 mb-4">
                {product.has_variants ? (
                  <VariantPicker product={product} settings={settings} />
                ) : (
                  <>
                    <PriceAndSku product={product} settings={settings} />
                    <AddToCart itemId={product.item_id} disabled={!product.in_stock} />
                  </>
                )}
              </div>
              <ProductAttrs
                characteristics={product.attributes}
                manufacturer={product.manufacturer}
                size={product.props.size}
                className="p-3 bg-light"
                apiClient={apiClient}
              />
            </div>
          </div>
          {product.text.description && (
            <article
              dangerouslySetInnerHTML={{ __html: product.text.description }}
              className="mb-4"
              style={{ maxWidth: '800px' }}
            />
          )}
        </div>
      </main>

      {/* SDG Gallery Section */}
      <SDGGallery />

      {/* Footer Section */}
      <Footer />
    </GlobalStateProvider>
  );
}

export async function generateMetadata({ params: { slug } }: IProps): Promise<Metadata> {
  const product = await fetchProductBySlug(slug);

  return {
    title: product?.seo.title,
    description: product?.seo.metaDesc,
  };
}

const fetchProductBySlug = async (slug: string): Promise<IProductItem | undefined> => {
  try {
    return await apiClient.catalog.getProduct(slug, {
      next: {
        revalidate,
        tags: ['products', 'product'],
      },
    });
  } catch (e) {
    const err = e as IAdapterNegativeResponse;
    if (err.isAxiosError && err.response?.status === 404) {
      return;
    }

    throw err;
  }
};

interface IProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const { products } = await apiClient.catalog.getProducts(
    {
      'per-page': 50,
    },
    {
      next: {
        revalidate,
        tags: ['products'],
      },
    }
  );

  return products.map(({ product_id, url_key }) => ({
    slug: `${url_key || product_id}`,
  }));
}
