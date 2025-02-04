'use client'; // This makes the component a client component

import { usePathname } from 'next/navigation';
import CategoriesMenu from '@/components/categoriesMenu';

export default function CategoriesMenuWrapper() {
  const pathname = usePathname(); // Get the current path

  // Define allowed routes for the CategoriesMenu
  const allowedRoutes = ['/products', '/another-route', '/one-more-route'];

  // Render CategoriesMenu only if the current path is in the allowed routes
  if (!allowedRoutes.includes(pathname)) return null;

  return <CategoriesMenu />;
}
