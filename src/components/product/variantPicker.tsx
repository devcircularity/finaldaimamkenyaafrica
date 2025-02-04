// /components/product/VariantPicker.tsx

'use client';

import { useState, useCallback } from 'react';
import { ProductVariantPicker } from 'boundless-commerce-components/dist/client';
import { IProductItem, IVariant } from 'boundless-api-client';
import AddToCart from './AddToCart';
import { IBasicSettings } from 'boundless-commerce-components';
import PriceAndSku from './PriceAndSku';

interface VariantPickerProps {
  product: IProductItem;
  settings?: IBasicSettings;
}

export default function VariantPicker({ product, settings }: VariantPickerProps) {
  const [selectedVariant, setSelectedVariant] = useState<IVariant | undefined>();

  const onCaseChange = useCallback((value: {}, variant?: IVariant) => {
    setSelectedVariant(variant);
  }, []);

  if (!product.has_variants) {
    return null;
  }

  return (
    <div>
      <ProductVariantPicker
        extendedVariants={product.extendedVariants!}
        onChange={onCaseChange}
        className="mb-4"
      />
      <PriceAndSku product={product} settings={settings} variant={selectedVariant} />
      <AddToCart
        itemId={selectedVariant?.inventoryItem.item_id}
        disabled={!selectedVariant?.in_stock}
      />
    </div>
  );
}
