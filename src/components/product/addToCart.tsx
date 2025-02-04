// /components/product/AddToCart.tsx

'use client';

import { useCallback, useState } from 'react';
import SpecifyQty from './addToCart/SpecifyQty'; // Ensure this path is correct
import clsx from 'clsx';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useCart } from 'boundless-commerce-components/dist/client';

interface AddToCartProps {
  itemId?: number;
  className?: string;
  disabled?: boolean;
}

export default function AddToCart({ itemId, className, disabled }: AddToCartProps) {
  const [qty, setQty] = useState<number>(1);
  const { cartId, addToCart } = useCart();

  const onAddToCartClicked = useCallback(() => {
    if (itemId) {
      addToCart(itemId, qty);
    }
  }, [addToCart, itemId, qty]);

  const isDisabled = !itemId || !cartId || disabled;

  return (
    <div className={clsx('d-flex flex-wrap', className)} style={{ gap: '15px' }}>
      <SpecifyQty disabled={isDisabled} qty={qty} setQty={setQty} />
      <Button
        startIcon={<AddShoppingCartIcon />}
        variant="contained"
        size="large"
        disabled={isDisabled}
        onClick={onAddToCartClicked}
      >
        Add To Cart
      </Button>
    </div>
  );
}
