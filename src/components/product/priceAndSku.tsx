// /components/product/PriceAndSku.tsx

'use client';

import { IProductItem, IVariant } from 'boundless-api-client';
import clsx from 'clsx';
import {
  useFormatCurrency,
  IBasicSettings,
  IPriceForTpl,
  getPriceForTpl,
  findSellingPrice,
} from 'boundless-commerce-components';
import currency from 'currency.js';
import { useMemo } from 'react';

interface PriceAndSkuProps {
  product: Pick<IProductItem, 'prices' | 'has_variants' | 'in_stock' | 'item_id' | 'sku'>;
  variant?: IVariant;
  className?: string;
  settings?: IBasicSettings;
}

export default function PriceAndSku({ product, variant, className, settings }: PriceAndSkuProps) {
  const { formatCurrency } = useFormatCurrency({ settings });
  const { price, benefit, isInStock } = useMemo(() => {
    let priceObj: IPriceForTpl | undefined;
    let benefit: number | null = null;

    if (variant) {
      const sellingPrice = findSellingPrice(variant.prices);
      if (sellingPrice) {
        priceObj = { price: sellingPrice.value, oldPrice: sellingPrice.old };
      }
    } else {
      const sellingPrice = findSellingPrice(product.prices);
      if (sellingPrice) {
        priceObj = getPriceForTpl(sellingPrice);
      }
    }

    if (priceObj && priceObj.price && priceObj.oldPrice) {
      benefit = currency(priceObj.oldPrice).subtract(priceObj.price).value;
    }

    const isInStock = variant ? variant.in_stock : product.in_stock;

    return { price: priceObj, benefit, isInStock };
  }, [product, variant]);

  return (
    <div className={clsx(className)}>
      {price?.price && (
        <p>
          {price.isFrom && (
            <span className="small text-muted d-inline-block me-2">From:</span>
          )}
          <span
            className={clsx('fs-3 fw-bold', { 'text-danger': price.oldPrice })}
          >
            {formatCurrency(price.price)}
          </span>
          {price.oldPrice && (
            <span className="text-decoration-line-through text-muted d-inline-block ms-2">
              {formatCurrency(price.oldPrice)}
            </span>
          )}
        </p>
      )}
      {benefit && (
        <p>
          <label>You save:</label>
          <span className="text-danger d-inline-block ms-2">
            {formatCurrency(benefit)}
          </span>
        </p>
      )}
      {(!product.has_variants || variant) && (
        <>
          <p
            className={clsx({
              'text-success': isInStock,
              'text-muted': !isInStock,
            })}
          >
            {isInStock ? 'In stock' : 'Out of stock'}
          </p>
          {(product.sku || variant?.sku) && (
            <p>
              SKU: <span className="text-muted">{variant?.sku || product.sku}</span>
            </p>
          )}
        </>
      )}
    </div>
  );
}
